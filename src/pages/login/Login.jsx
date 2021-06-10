import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <pan className="loginTitle">Acceder</pan>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Introduce tu email..."/>
            <label>Contraseña</label>
            <input type="password" className="loginInput" placeholder="Introduce tu contraseña..."/>
            <button className="loginButton">Acceder</button>
        </form>
        <button className="loginRegisterButton">
            <Link className="link" to="/register">Registrar</Link>
        </button>
        </div>
    )
}
