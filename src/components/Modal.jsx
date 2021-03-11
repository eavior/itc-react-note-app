import Modal from 'react-bootstrap/Modal'
import React, { render, useState } from "react";
import Button from 'react-bootstrap/Button'


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            edit: false,
            noteTitle: "",
            noteBody: "",
            value: "",
        };

        // const { note } = props;
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        // const { note } = this.props;
        // const { id, date, noteTitle, noteBody } = note;
        this.setState({ noteBody: this.props.note.noteBody })

    }

    editForm() {
        this.setState(prevState => {
            return { edit: true };
        });
    }

    handleSave() {
        this.setState(prevState => {
            return { show: false };
        });
        this.props.onHideModal();
    }


    handleClose() {
        this.setState(prevState => {
            return { show: false };
        });
        this.props.onHideModal();
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value,
        });
        console.log(this.state.noteBody)
    }


    handleFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
        // Make call to API to save changes here
        // User.save({ firstName: e.target.value });
    };




    render() {

        // const { id, date, noteTitle, noteBody } = note;
        // const { user, loading } = this.state;

        let elementToRender = {};
        if (this.props.note.noteTitle && !this.state.edit) {
            elementToRender =
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.note.noteTitle}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>{this.props.note.noteBody}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
          </Button>
                        <Button variant="primary" onClick={() => this.handleClose()}>
                            Save Changes
          </Button><Button variant="outline-danger" onClick={this.props.onDeleteModal}>Delete</Button>
                    </Modal.Footer>
                </Modal>;
        }

        if (!this.props.note.noteTitle && !this.state.edit) {
            elementToRender =
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Body> {this.props.note.noteBody}
                        </Modal.Body>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>Close</Button>
                        <Button variant="primary" onClick={() => this.handleClose()}>Save Changes</Button>
                        <Button variant="outline-danger" onClick={this.props.onDeleteModal}>Delete</Button>
                        <Button variant="outline-danger" onClick={() => this.editForm()}>Edit</Button>
                    </Modal.Footer>
                </Modal>;
        }

        if (this.state.edit) {
            elementToRender =
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.note.noteTitle}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <div className="static-modal">
                            <input
                                value={this.state.noteBody}
                                name="noteBody"
                                type="textarea"
                                className="form-control"
                                onChange={this.handleChange}
                            />
                        </div>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.props.onEditModal}>
                            Save Changes
          </Button><Button variant="outline-danger" onClick={this.props.onDeleteModal}>Delete</Button>
                    </Modal.Footer>
                </Modal>;
        }


        return <>
            {elementToRender}
        </>




    }
}







// function Example(props) {
//     const { note } = props;
//     const { id, date, noteTitle, noteBody } = note;


//     const [show, setShow] = useState(true);

//     const handleClose = () => {

//         props.onResetShowModal()
//         setShow(false)

//     }


//     return (

//     );
// }



export default Example;