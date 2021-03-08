import React from "react";
import ChildBlock from "./ChildBlock";
// import { Note } from './Note'


export default class NewNote extends React.Component {
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
        this.titlePlaceholder = 'Enter a title for your note (optional)';
        this.bodyPlaceholder = 'Enter a new note';

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value,
            date: Date.now()
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.note = { id: Date.now(), date: this.state.date, noteTitle: this.state.noteTitle, noteBody: this.state.noteBody };
        this.state.arrayOfNotes.push(this.note);
        console.log(this.state.arrayOfNotes);
        this.setState({
            value: "", id: "",
            noteTitle: "",
            noteBody: "",
            date: "",
        });
    }

    handleClick() {
        // this.setState({time: this.state.time + 1}); // Better is to use a callback function with state:
        this.setState(prevState => { // you can use it 'state' as well, it's a callback function parameter. SetState is calling the callback function. 
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <label>
                    <input name="noteTitle" placeholder={this.titlePlaceholder} value={this.state.noteTitle} onChange={this.handleChange} />
                    <br />
                    <textarea name="noteBody" placeholder={this.bodyPlaceholder} value={this.state.noteBody} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Add" />
            </form>
        );
    }
}
