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
    const deleteConfirmation = window.confirm("Do you really want to delete this note?");
    if (deleteConfirmation) {
      this.setState(prevState => {
        return { notes: [...prevState.notes.slice(0, index), ...prevState.notes.slice(index + 1)] }
      });
    };

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
          /></Col>
        </Row>
      </Container>
    )
  }
}

export default App;
