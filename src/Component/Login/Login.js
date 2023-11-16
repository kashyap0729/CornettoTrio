import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        //${email} 

        const requestBody = {
            email: email, // This is where the email variable is used
            password:password 
        };
      const response = await axios.post(`http://localhost:5000/user/authenticate`,requestBody);
      if (response.data.authenticated) {
        navigate('/home'); // Redirect to home page
      } else {
        
        setResult('Authentication failed. Please check your credentials.'); // Set error message
      }
    } catch (error) {
      // Handle errors from the server or network issues
      setResult('An error occurred while trying to authenticate. Please try again.');
      // You can also use error.response or error.request for more detailed error handling
    }
  };
  

  return (
    <form className="cmxform" onSubmit={handleSubmit} autoComplete="off">
      <br />
      <p>
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />
      </p>
      
      {result && <div>{JSON.stringify(result)}</div>}
      <p>
        <input className="submit" type="submit" value="Submit" />
      </p>
    </form>
  );
}

export default Login;