import Card from 'react-bootstrap/Card'

function NoteItem(props) {
    // props = { note: { id: ..., date ..., noteTitle: ... } }
    const { note } = props;
    const { id, date, noteTitle, noteBody } = note;
    return (
        <Card>
            <Card.Body>
                <Card.Title>{noteTitle}</Card.Title>
                <Card.Text>{noteBody}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated on {date}</small>
                <button onClick={props.onDelete}>Delete</button>
            </Card.Footer>
        </Card>
    )
}

export default NoteItem;