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
        this.setState(prevState => {
            return { showModal: false };
        });   // somehow this and the next line do not set the status back to false and therefore the card cannot be clicked more than once....
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="cardHolder" onClick={() => {
                this.activateModal()
            }}>
                {this.state.showModal && <NoteModal
                    key={this.props.note.id}
                    note={this.props.note}
                    onHideModal={() => this.resetModal()}
                    onDeleteModal={() => this.props.onDelete(this.props.index)}
                    onEditModal={(note) => this.props.onEditNote(this.props.note)}
                    onEditNote={(editedNote) => this.props.onEditNote(editedNote)}
                />}
                <Card className="card">
                    <Card.Body>
                        {this.props.note.noteTitle && <Card.Title>{this.props.note.noteTitle}</Card.Title>}
                        <Card.Text>{this.props.note.noteBody}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row className="cardFooter">
                            <Col sm={9}>
                                <Row className="text-left"><small className="text-muted">Created: {this.props.note.date}</small></Row>
                                {this.props.note.changedDate && <Row className="text-left"><small className="text-muted">Last edit on: {this.props.note.changedDate}</small></Row>}
                            </Col>
                            <Col sm={2} className="text-right"><Button variant="outline-danger" onClick={this.props.onDelete}><MdDelete className="delete" /></Button></Col>
                        </Row>
                    </Card.Footer>
                </Card >
            </div >
        )
    }
}

export default NoteItem;