import Button from 'react-bootstrap/Button';
import './Home.css';
import Card from 'react-bootstrap/Card';
function HomeChild(props){
    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Button variant="primary">Like</Button>
        </Card.Body>
        </Card>   
     );
}
export default HomeChild;