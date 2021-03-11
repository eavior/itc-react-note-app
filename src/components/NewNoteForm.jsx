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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const creationDate = new Date(Date.now()).toLocaleString('en-GB', { timeZone: 'Asia/Jerusalem' });;
        const creationDate2 = creationDate.toLocaleString('en-GB', { timeZone: 'Asia/Jerusalem' });;
        this.setState({
            ...this.state,
            [event.target.name]: value,
            date: creationDate
        });
    }

    handleSubmit(event) {
        event.preventDefault();
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
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Add a new note</Form.Label>
                        <Form.Control type="text" name="noteTitle" placeholder={this.titlePlaceholder} value={this.state.noteTitle} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <TextareaAutosize className="textbox" as="textarea" name="noteBody" placeholder={this.bodyPlaceholder} value={this.state.noteBody} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </div >
        );
    }
}
