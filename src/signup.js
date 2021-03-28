
import './login.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function sign() {
        console.warn(name + email + password);
        let item = { name, email, password };

        await fetch("http://localhost:1005/api/user/signup", {
            mode: "no-cors",
            method: "POST",
            body: JSON.stringify(item),
            headers: {

                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        // res = await res.json();
        // console.log(res);
    }

    return (
        <div className="card-body">
            <label for="name">Email Address</label>
            <input type="text" value={name} className="form-control" id="name" name="name" placeholder="name"
                onChange={(e) => setName(e.target.value)} />

            <label for="email">Email Address</label>
            <input type="email" value={email} className="form-control" id="email" name="email" placeholder="email"
                onChange={(e) => setEmail(e.target.value)} />


            <label for="password">Password</label>
            <input type="password" value={password} className="form-control" id="password" name="password" placeholder="password"
                onChange={(e) => setPassword(e.target.value)} />


            <button onClick={sign} className="btn btn-primary">Login</button>


        </div>
    );
}

export default Signup;