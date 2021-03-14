import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import TextareaAutosize from 'react-autosize-textarea';

class NoteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            edit: false,
            noteTitle: "",
            noteBody: "",
            value: "",
            changedDate: "",
        };
    }

    editForm() {
        this.setState(prevState => {
            return { edit: true, noteTitle: this.props.note.noteTitle, noteBody: this.props.note.noteBody };
        });
    }

    handleEditSubmit(event) {
        event.preventDefault();
        const editedNote = { id: this.props.note.id, date: this.props.note.date, changedDate: this.state.changedDate, noteTitle: this.state.noteTitle, noteBody: this.state.noteBody };
        this.props.onEditNote(editedNote);
        this.handleClose();
    }

    handleClose() {
        this.setState(prevState => {
            return { show: false };
        });
        this.props.onHideModal();
    }

    handleChange(event) {
        const value = event.target.value;
        const changedDate = new Date(Date.now()).toLocaleString('en-GB', { timeZone: 'Asia/Jerusalem' });;
        this.setState({
            ...this.state,
            [event.target.name]: value,
            changedDate: changedDate
        });
    }

    render() {
        let elementToRender = {};
        if (!this.state.edit) {
            elementToRender =
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    {this.props.note.noteTitle &&
                        <Modal.Header>
                            <Modal.Title>{this.props.note.noteTitle}</Modal.Title>
                        </Modal.Header>
                    }
                    {this.props.note.noteTitle &&
                        <Modal.Body>{this.props.note.noteBody}
                        </Modal.Body>
                    }
                    {!this.props.note.noteTitle &&
                        <Modal.Header closeButton>
                            <Modal.Body> {this.props.note.noteBody}
                            </Modal.Body>
                        </Modal.Header>
                    }
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={() => this.handleClose()}>Close</Button>
                        <Button variant="outline-success" onClick={() => this.editForm()}>Edit</Button>
                        <Button variant="outline-danger" onClick={this.props.onDeleteModal}>Delete</Button>
                    </Modal.Footer>
                </Modal >;
        }
        if (this.state.edit) {
            elementToRender =
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className="static-modal">
                                <TextareaAutosize autoFocus
                                    value={this.state.noteTitle}
                                    name="noteTitle"
                                    type="textarea"
                                    className="form-control"
                                    onChange={(event) => this.handleChange(event)}
                                />
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="static-modal">
                            <TextareaAutosize
                                value={this.state.noteBody}
                                name="noteBody"
                                type="textarea"
                                className="form-control"
                                onChange={(event) => this.handleChange(event)}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-success" onClick={(event) => this.handleEditSubmit(event)}>Save changes & close</Button>
                        <Button variant="outline-danger" onClick={this.props.onDeleteModal}>Delete</Button>
                    </Modal.Footer>
                </Modal>;
        }
        return <>
            {elementToRender}
        </>
    }
}

export default NoteModal;