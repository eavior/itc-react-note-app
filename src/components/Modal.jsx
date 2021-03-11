import Modal from 'react-bootstrap/Modal'
import React, { render, useState } from "react";
import Button from 'react-bootstrap/Button'


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };

        // const { note } = props;


    }

    componentDidMount() {
        // const { note } = this.props;
        // const { id, date, noteTitle, noteBody } = note;

    }



    handleClose() {
        this.setState(prevState => {
            return { show: false };
        });
        this.props.onHideModal();
    }

    render() {

        // const { id, date, noteTitle, noteBody } = note;
        // const { user, loading } = this.state;

        let elementToRender =
            <Modal show={this.state.show} onHide={() => this.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.note.noteTitle}</Modal.Title>
                </Modal.Header>

                <Modal.Body closeButton>{this.props.note.noteBody}
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
        if (!this.props.note.noteTitle) {
            elementToRender =
                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Body> {this.props.note.noteBody}
                        </Modal.Body>
                    </Modal.Header>
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