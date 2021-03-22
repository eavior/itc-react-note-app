import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import TextareaAutosize from 'react-autosize-textarea';


export default class NewNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            id: "",
            noteTitle: "",
            noteBody: "",
            date: "",
            arrayOfNotes: []
        };
        this.note = {};
        this.titlePlaceholder = 'Note title (optional)';
        this.bodyPlaceholder = 'Enter a new note';
    }

    handleChange(event) {
        const value = event.target.value;
        const creationDate = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Jerusalem' });;
        this.setState({
            ...this.state,
            [event.target.name]: value,
            date: creationDate
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.noteBody) return;
        const note = { id: Date.now(), date: this.state.date, noteTitle: this.state.noteTitle, noteBody: this.state.noteBody };
        this.props.onAddNote(note);
        this.setState({
            value: "", id: "",
            noteTitle: "",
            noteBody: "",
            date: "",
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Group>
                        <Form.Label>Add a new note</Form.Label>
                        <Form.Control type="text" name="noteTitle" placeholder={this.titlePlaceholder} value={this.state.noteTitle} onChange={(event) => this.handleChange(event)} />
                    </Form.Group>
                    <Form.Group>
                        <TextareaAutosize className="textbox" as="textarea" name="noteBody" placeholder={this.bodyPlaceholder} value={this.state.noteBody} onChange={(event) => this.handleChange(event)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </div >
        );
    }
}
