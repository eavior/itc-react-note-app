import NoteItem from "./NoteItem";
import CardDeck from 'react-bootstrap/CardDeck'

function NotesList(props) {
    // console.log("props Noteslist: " + JSON.stringify(props));
    return (
        <CardDeck className="flex-wrap">
            {props.notes.map((note, index) =>
                <NoteItem
                    key={note.id}
                    note={note}
                    onDelete={() => props.onDeleteNote(index)}
                />
            )}
        </CardDeck>
    )
}

export default NotesList;