import './Login.css'
import { useState } from 'react';
import Home from '../Home/Home';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const noti = withReactContent(Swal)


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccesful, setLoginSuccesful] = useState(false);

    // Esta funcion se ejecuta cuando se hace click en el boton de login y realiza la consulta a la API para saber si el usuario y contraseña son correctos
    const handleSubmit = (e)  => {
        e.preventDefault();
        // console.log({password: password, username: username});

        const data = {
            username: username,
            password: password
        };
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(result => {
            if (result.token) {
                console.log(result.token);
                localStorage.setItem("token", result.token);
                setLoginSuccesful(true);

                noti.fire({    
                    title: <strong>Bienvenido!</strong>,
                    html: <i>${username}</i>,
                    icon: 'success'
                })

            } else {
                console.error("Token not found in the response:", result);
                noti.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o Contraseña incorrectos',
                  })
            }
        })
        .catch(err => {
            console.log("Fetch error:", err);
        });
    }

    // Esta funcion se ejecuta cuando se hace click en el boton de logout y borra el token del localStorage
    return (
        <>{loginSuccesful ? <Home />: 
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
        }</>
    );
}

export default Login;