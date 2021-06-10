import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar(){
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">INICIO</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">MOTIVACIÓN</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">CONTACTO</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/write">ESCRIBE</Link>
                    </li>
                    <li className="topListItem">
                    {user && "SALIR"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/recycling-symbols-1618244867.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
                        alt=""/>

                    ) : (
                        <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/login">ACCEDER</Link></li>
                            <li className="topListItem"><Link className="link" to="/register">REGISTRO</Link></li>
                        
                        </ul>
                    )
                }
               
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}