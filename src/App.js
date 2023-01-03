import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Home() {
  return <h1>Welcome to the world of Geeks!</h1>;
}

function Contact() {
  return (
    <address>
      You can find us here:
      <br />
      GeeksforGeeks
      <br />
      5th & 6th Floor, Royal Kapsons, A- 118, <br />
      Sector- 136, Noida, Uttar Pradesh (201305)
    </address>
  );
}

function About() {
  return (
    <div>
      <h2>GeeksforGeeks is a computer science portal for geeks!</h2>
      Read more about us at :
      <a href="https://www.geeksforgeeks.org/about/">
        https://www.geeksforgeeks.org/about/
      </a>
    </div>
  );
}

function Details() {
  return <h1>Details</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/123">Details</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
