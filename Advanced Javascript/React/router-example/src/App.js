import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/About";
import LoginPage from "./Pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* This is where our pages will be switched */}
        <Switch>
          <Route exact path="/">
            <HomePage username={username} />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/login">
            <LoginPage username={username} setUsername={setUsername} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
