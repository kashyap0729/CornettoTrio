import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Layout from './Component/Layout/Layout';
import Job from './Component/Job/Job';
import Login from './Component/Login/Login';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Login/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="job" element={<Job/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    // <Home/>
  );
}

export default App;
