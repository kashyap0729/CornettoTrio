import '../Home/Home.css';
import Card from 'react-bootstrap/Card';
function Job(){
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
   
        <Card style={{ width: '50rem' }}>
        <Card.Img src='https://miro.medium.com/v2/0*XLuDzOK2YfK1GoZa'></Card.Img>
        <br/>
          <Card.Body>
          <Card.Title>Electronics Store Employee  (Shaun of the Dead)</Card.Title>
            <Card.Text>
            Shaun, the protagonist, works as a sales assistant at an electronics store. His job involves assisting customers with their electronic needs, handling sales transactions, and navigating the challenges of a mundane and unfulfilling job.
            </Card.Text>
          </Card.Body>
          <Card.Body>
          <Card.Title>Police Sergeant (Hot Fuzz)</Card.Title>
            <Card.Text>
            Nicholas Angel is an exceptional police officer who is transferred to the seemingly quiet village of Sandford. As a Police Sergeant, he takes his duty seriously, enforcing the law with precision and dedication. His job involves investigating crimes, maintaining order, and dealing with the quirky residents of the village.           
             </Card.Text>
          </Card.Body>
          <Card.Body>
          <Card.Title>Gary King - Unemployed (The World's End)</Card.Title>
            <Card.Text>
            Gary King, the central character in "The World's End," is not employed at the time of the story. He embarks on a journey with his friends to complete a legendary pub crawl. While not technically a job, his quest becomes a defining and somewhat chaotic adventure.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
}
export default Job;