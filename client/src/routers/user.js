import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './user.css';
import { useNavigate  } from "react-router-dom";



export default function User() {
    const navigate = useNavigate();
    const [ username, setUsername ] = useState("Bojji");
    const [ password, setPassword ] = useState("kings");
    const [ token, setToken ] = useState(null);

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
      navigate("/dashboar");

    }

    return (
        <div>
            
            <h3>Sign In</h3>
            {token}
            <div class="form-group">
                <label>Email address</label>
                <input type="email" value={username} class="form-control form-control-lg" onChange={(e)=>{setUsername(e.target.value)}} />
            </div>

            <div class="form-group">
                <label>Password {password}</label>
                <input type="password" value={password} class="form-control form-control-lg" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>

            <button  class="btn btn-dark btn-lg btn-block" onClick={signIn}>Sign In</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

           

       
        </div>
    )
}
