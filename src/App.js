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
    console.log(editedNote);
    alert(JSON.stringify(editedNote));
    console.log(editedNote.id)
    const noteId = editedNote.id;
    let objIndex = this.state.notes.findIndex((obj => obj.id == noteId));

    //Log object to Console.
    console.log("Before update: ", this.state.notes[objIndex])

    //Update object's name property.
    this.state.notes[objIndex].changedDate = editedNote.changedDate;
    this.state.notes[objIndex].noteTitle = editedNote.noteTitle;
    this.state.notes[objIndex].noteBody = editedNote.noteBody;


    //Log object to console again.
    console.log("After update: ", this.state.notes[objIndex])


  }

  render() {
    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col md="auto">        <NewNoteForm
            onAddNote={(note) => this.addNewNote(note)}
          /></Col>
        </Row>
        <Row className="justify-content-md-center">
          <br /><br />
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto"><NotesList
            notes={this.state.notes}
            onDeleteNote={(index) => this.deleteNote(index)}
            onEditNote={(editedNote) => this.addEditedNote(editedNote)}
          /></Col>
        </Row>
      </Container>
    )
  }
}

export default App;
