import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function NoteItem(props) {
    // console.log("props Note 1" + JSON.stringify(props));
    const { note } = props;
    const { id, date, noteTitle, noteBody } = note;
    function doSomething(event) {
        // alert("open the modal");
    }

    return (
        <div style={{ cursor: 'pointer' }} onClick={(event) => doSomething(event.target.value)}>
            <Card>
                <Card.Body>
                    {noteTitle && <Card.Title>{noteTitle}</Card.Title>}
                    <Card.Text>{noteBody}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col className="text-left"><small className="text-muted">{date}</small></Col>
                        <Col className="text-right"><Button variant="outline-danger" onClick={props.onDelete}>Delete</Button></Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default NoteItem;