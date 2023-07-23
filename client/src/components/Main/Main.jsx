import Login from "../Login/Login";
import Home from "../Home/Home";

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

let tokenExistAndIsValid = (parseJwt(localStorage.getItem("token")).exp * 1000) > Date.now();

const Main = () => {
    return (
        <>{tokenExistAndIsValid ? <Home /> : <Login />}</>
    )
}

export default Main;