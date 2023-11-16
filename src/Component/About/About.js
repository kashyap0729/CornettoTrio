import '../Home/Home.css';
import Card from 'react-bootstrap/Card';
function About(){
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card style={{ width: '50rem' }}>
        <Card.Body>
        <Card.Img src='https://image-cdn.neatoshop.com/styleimg/12191/none/lightturquoise/default/188109-20.jpg' style={{ width: '400px', height:"auto"}}/>

            <Card.Title>The Cornetto Trilogy</Card.Title>
            <Card.Text>
            Welcome to the ultimate fan destination for "The Cornetto Trilogy" – a cinematic masterpiece crafted by the brilliant minds of director Edgar Wright, writer Simon Pegg, and actor Nick Frost. 🎬🍦

Explore the hilariously unexpected blend of comedy, action, and wit in this iconic trilogy, comprising "Shaun of the Dead," "Hot Fuzz," and "The World's End." Immerse yourself in the world of relatable characters, witty dialogues, and seamless storytelling that has left audiences laughing, gasping, and craving Cornettos.

Here, we celebrate the genius of Edgar Wright's directorial vision, Simon Pegg's comedic prowess, and Nick Frost's charm that collectively brings these films to life. Share your favorite moments, quotes, and behind-the-scenes anecdotes with fellow fans who appreciate the artistry and humor embedded in every frame.

Join us in reliving the epic pub crawls, surviving zombie apocalypses, and unraveling small-town mysteries. Whether you're a die-hard fan or a newcomer, this fan page is your virtual haven for all things Cornetto. So grab your favorite flavor, kick back, and let's journey through "The Cornetto Trilogy" together!

Stay tuned for updates, discussions, and exclusive content. Let the Cornetto love continue to unite us all! 🌟🍿
            </Card.Text>
        </Card.Body>
        </Card>  
        </div> 
    );
}
export default About;