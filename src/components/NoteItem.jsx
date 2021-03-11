import React from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Example from './Modal'


class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }

        // const { note } = props;
        // const { id, date, noteTitle, noteBody } = note;

    }

    activateModal() {
        // this.setState((state) => { return { showModal: state.showModal }; });
        this.setState({ showModal: true });

    }



    resetModal() {
        // this.setState((state) => { return { showModal: state.showModal }; });
        this.setState({ showModal: false });
        alert("done")
    }


    render() {
        return (
            <div style={{ cursor: 'pointer' }} onClick={() => {
                this.activateModal()
            }}>
                {this.state.showModal && <Example
                    key={this.props.note.id}
                    note={this.props.note}
                    onHideModal={() => this.resetModal()}
                    onDeleteModal={() => this.props.onDelete(this.props.index)}

                // onDelete={() => props.onDeleteNote(index)}
                />}



                <Card>
                    <Card.Body>
                        {this.props.note.noteTitle && <Card.Title>{this.props.note.noteTitle}</Card.Title>}
                        <Card.Text>{this.props.note.noteBody}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col className="text-left"><small className="text-muted">{this.props.note.date}</small></Col>
                            <Col className="text-right"><Button variant="outline-danger" onClick={this.props.onDelete}>Delete</Button></Col>

                        </Row>
                    </Card.Footer>
                </Card>
            </div >
        )
    }
}

// function NoteItem(props) {
//     // console.log("props Note 1" + JSON.stringify(props));
//     const { note } = props;
//     const { id, date, noteTitle, noteBody } = note;


//     return (
//         <div style={{ cursor: 'pointer' }} onClick={(event) => Example(note)}>
//             <Card>
//                 <Card.Body>
//                     {noteTitle && <Card.Title>{noteTitle}</Card.Title>}
//                     <Card.Text>{noteBody}</Card.Text>
//                 </Card.Body>
//                 <Card.Footer>
//                     <Row>
//                         <Col className="text-left"><small className="text-muted">{date}</small></Col>
//                         <Col className="text-right"><Button variant="outline-danger" onClick={props.onDelete}>Delete</Button></Col>
//                     </Row>
//                 </Card.Footer>
//             </Card>
//             {/* <Example
//                 key={note.id}
//                 note={note}
//             // onDelete={() => props.onDeleteNote(index)}
//             /> */}
//         </div>
//     )
// }

export default NoteItem;