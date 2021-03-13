import React from "react";
import './App.css';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  addNewNote(note) {
    this.setState(prevState => {
      return { notes: [...prevState.notes, note] };
    });
  }

  deleteNote(index) {
    const deleteConfirmation = window.confirm("Are you sure you want to delete your note?");
    if (deleteConfirmation) {
      this.setState(prevState => {
        return { notes: [...prevState.notes.slice(0, index), ...prevState.notes.slice(index + 1)] }
      });
    };
  }

  addEditedNote(editedNote) {
    const objIndex = this.state.notes.findIndex((obj => obj.id === editedNote.id));
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes.slice(0, objIndex),
          editedNote,
          ...prevState.notes.slice(objIndex + 1),
        ]
      }
    });
  }

  render() {
    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto"><NewNoteForm onAddNote={(note) => this.addNewNote(note)} /></Col>
        </Row>
        <br />
        <Container>
          <NotesList
            className="justify-content-md-center"
            notes={this.state.notes}
            onDeleteNote={(index) => this.deleteNote(index)}
            onEditNote={(editedNote) => this.addEditedNote(editedNote)}
          />
        </Container>
      </Container>
    )
  }
}

export default App;
