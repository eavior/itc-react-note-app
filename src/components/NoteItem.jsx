import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MdDelete } from "react-icons/md";
import TextareaAutosize from "react-autosize-textarea";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      edit: false,
      noteTitle: "",
      noteBody: "",
      value: "",
      changedDate: "",
    };
  }

  showModal(state) {
    this.setState({ show: state });
  }

  editForm() {
    const {
      note: { noteBody, noteTitle },
    } = this.props;
    this.setState((prevState) => {
      return { edit: true, noteTitle, noteBody };
    });
  }

  handleEditSubmit(event) {
    if (!this.state.noteBody) return;
    const { note, onEditNote } = this.props;
    event.preventDefault();
    const editedNote = {
      id: note.id,
      date: note.date,
      changedDate: this.state.changedDate,
      noteTitle: this.state.noteTitle,
      noteBody: this.state.noteBody,
    };
    onEditNote(editedNote);
    this.showModal(false);
  }

  handleChange(event) {
    const value = event.target.value;
    const changedDate = new Date(Date.now()).toLocaleString("en-GB", {
      timeZone: "Asia/Jerusalem",
    });
    this.setState({
      [event.target.name]: value,
      changedDate: changedDate,
    });
  }

  render() {
    const {
      note: { noteBody, noteTitle, date, changedDate },
      onDelete,
    } = this.props;
    let elementToRender;

    if (!this.state.edit) {
      elementToRender = (
        <div>
          {noteTitle && (
            <Modal.Header>
              <Modal.Title>{noteTitle}</Modal.Title>
            </Modal.Header>
          )}
          {noteTitle && <Modal.Body>{noteBody}</Modal.Body>}
          {!noteTitle && (
            <Modal.Header closeButton>
              <Modal.Body> {noteBody}</Modal.Body>
            </Modal.Header>
          )}
          <Modal.Footer>
            <Button
              variant="outline-secondary"
              onClick={() => this.showModal(false)}>
              Close
            </Button>
            <Button variant="outline-success" onClick={() => this.editForm()}>
              Edit
            </Button>
            <Button variant="outline-danger" onClick={onDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </div>
        // </Modal>
      );
    }
    if (this.state.edit) {
      elementToRender = (
        <div>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="static-modal">
                <TextareaAutosize
                  autoFocus
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
            <Button
              variant="outline-success"
              onClick={(event) => this.handleEditSubmit(event)}>
              Save changes & close
            </Button>
            <Button variant="outline-danger" onClick={onDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </div>
      );
    }
    return (
      <div>
        <Card
          className="card"
          style={{ cursor: "pointer" }}
          type="reset"
          onClick={() => this.showModal(true)}>
          <Card.Body>
            {noteTitle && <Card.Title>{noteTitle}</Card.Title>}
            <Card.Text>{noteBody}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row className="cardFooter">
              <Col sm={9}>
                <Row className="text-left">
                  <small className="text-muted">Created: {date}</small>
                </Row>
                {changedDate && (
                  <Row className="text-left">
                    <small className="text-muted">
                      Last edit on: {changedDate}
                    </small>
                  </Row>
                )}
              </Col>
              <Col sm={2} className="text-right">
                <Button variant="outline-danger" onClick={onDelete}>
                  <MdDelete className="delete" />
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        <Modal show={this.state.show} onHide={() => this.showModal(false)}>
          {elementToRender}
        </Modal>
      </div>
    );
  }
}

export default NoteItem;
