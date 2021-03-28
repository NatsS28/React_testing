
import './login.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const history = useHistory();

    const API = 'http://localhost:1005/api/user';
    // const lg = (item) => {
    /*       return fetch(`${API}/login`, {
               mode: 'no-cors',
               method: 'POST',
               headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(item),
           })
               .then((res) => res.json())
               .catch((error) => console.error(error));
       };*/



    async function log() {
        console.warn(email, password);
        console.log("clicked");
        let item = { email, password };
        //  lg(item);
        let result = await fetch("http://localhost:1005/api/user/login", {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Access-Control-Allow-Origin': '*',

            },
            body: JSON.stringify(item),
        })
    }


    return (
        <div className="card-body">

            <label for="email">Email Address</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="email"
                onChange={(e) => setEmail(e.target.value)} />


            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password"
                onChange={(e) => setPassword(e.target.value)} />


            <button onClick={log} className="btn btn-primary">Login</button>


        </div>
    );
}

export default Login;