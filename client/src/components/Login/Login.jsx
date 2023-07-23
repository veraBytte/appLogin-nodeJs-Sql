import './Login.css'
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)  => {
        e.preventDefault();
        console.log({password: password, username: username});

    }


    return (
        <div className="container-form">
            <form action="">
                <label className="custom-label" htmlFor="">Username:</label>
                <input 
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                    className="custom-input" type="text" 
                />

                <label className="custom-label" htmlFor="">Password:</label>
                <input 
                    onChange={(event)=>{setPassword(event.target.value)}} 
                    className="custom-input" type="text"
                />

                <button className="custom-button" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;