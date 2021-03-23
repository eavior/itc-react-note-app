import React from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NoteModal from './Modal'
import { MdDelete } from 'react-icons/md';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    activateModal() {
        this.setState({ showModal: true });

    }

    resetModal() {
        // this.setState(prevState => {
        //     return { showModal: false };
        // });   // somehow this and the next line do not set the status back to false and therefore the card cannot be clicked more than once.... 

    }

    componentWillChange() {
        this.setState({ showModal: this.props.show });
    }

    render() {
        const { note, onDelete, onEditNote, index } = this.props;
        return (
            <div style={{ cursor: 'pointer' }} type="reset" onClick={() => {
                this.activateModal()
            }}>
                {this.state.showModal && <NoteModal
                    key={note.id}
                    note={note}
                    show={this.state.showModal}
                    onHideModal={() => this.resetModal()}
                    onRequestClose={() => this.setState({ showModal: false })}
                    onDeleteModal={() => onDelete(index)}
                    onEditModal={(note) => onEditNote(note)}
                    onEditNote={(editedNote) => onEditNote(editedNote)}
                />}
                <Card className="card">
                    <Card.Body>
                        {note.noteTitle && <Card.Title>{note.noteTitle}</Card.Title>}
                        <Card.Text>{note.noteBody}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row className="cardFooter">
                            <Col sm={9}>
                                <Row className="text-left"><small className="text-muted">Created: {note.date}</small></Row>
                                {note.changedDate && <Row className="text-left"><small className="text-muted">Last edit on: {note.changedDate}</small></Row>}
                            </Col>
                            <Col sm={2} className="text-right"><Button variant="outline-danger" onClick={onDelete}><MdDelete className="delete" /></Button></Col>
                        </Row>
                    </Card.Footer>
                </Card >
            </div >
        )
    }
}

export default NoteItem;