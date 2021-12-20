import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user.css';
import { useNavigate } from "react-router-dom";



export default function User() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Bojji");
  const [password, setPassword] = useState("kings");
  const [token, setToken] = useState(null);

  async function signIn() {
    const response = await fetch("http://localhost:8080/api/authentication/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const { data } = await response.json();
    setToken(data.token);
    console.log(data)
    navigate("/photo");

  }

  return (
    /*
    import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
return (<Router>
<div className="App">
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-in"}>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div className="auth-wrapper">
    <div className="auth-inner">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  </div>
</div></Router>
);
}

export default App;
     */
    <div>

      <h3 style={{marginTop: 50}}>Sign In</h3>
      {token}
      <div class="form-group">
        <label>Email address</label>
        <input type="email" value={username} class="form-control form-control-lg" onChange={(e) => { setUsername(e.target.value) }} />
      </div>

      <div class="form-group">
        <label>Password {password}</label>
        <input type="password" value={password} class="form-control form-control-lg" onChange={(e) => { setPassword(e.target.value) }} />
      </div>

      <button class="btn btn-dark btn-lg btn-block" onClick={signIn}>Sign In</button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>




    </div>
  )
}
