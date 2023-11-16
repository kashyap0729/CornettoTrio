import '../Home/Home.css';
import Card from 'react-bootstrap/Card';
function Contact(){
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
   
        <Card style={{ width: '50rem' }}>
        <Card.Img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41e11314-5f46-44d9-917e-8edd6cfceb6f/d7shaxn-e7d7c1ad-41b5-497c-8eed-3d3b4b2a4868.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxZTExMzE0LTVmNDYtNDRkOS05MTdlLThlZGQ2Y2ZjZWI2ZlwvZDdzaGF4bi1lN2Q3YzFhZC00MWI1LTQ5N2MtOGVlZC0zZDNiNGIyYTQ4NjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VKD3uePxaSPYNgQ46_pwZSVirA9zwW_YxmYu17WBCyk'></Card.Img>

          <Card.Body>
            <Card.Text style={{ marginBottom: '10px' }}>
              Phone: +1 (123)-456-9876
            </Card.Text>
            <Card.Text style={{ marginBottom: '10px' }}>
            Email: abc@cornettotrio.in
            </Card.Text>
            <Card.Text style={{ marginBottom: '10px' }}>
              Address: 1788 Brookline MA, 02445
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
}
// https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41e11314-5f46-44d9-917e-8edd6cfceb6f/d7shaxn-e7d7c1ad-41b5-497c-8eed-3d3b4b2a4868.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxZTExMzE0LTVmNDYtNDRkOS05MTdlLThlZGQ2Y2ZjZWI2ZlwvZDdzaGF4bi1lN2Q3YzFhZC00MWI1LTQ5N2MtOGVlZC0zZDNiNGIyYTQ4NjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VKD3uePxaSPYNgQ46_pwZSVirA9zwW_YxmYu17WBCyk
export default Contact;