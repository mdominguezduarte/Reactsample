import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <pan className="registerTitle">Registro</pan>
        <form className="registerForm">
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Introduce tu email..."/>
            <label>Contraseña</label>
            <input type="password" className="registerInput" placeholder="Introduce tu contraseña..."/>
            <button className="registerButton">Registrar</button>
        </form>
        <button className="registerLoginButton">
    
        <Link className="link" to="/login">Acceder</Link>
        </button>
        </div>
    );
}
