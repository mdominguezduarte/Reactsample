import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">NUESTRO EQUIPO</span>
                <img className="img_team"src="https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-10/water-glass-1500x.jpg?h=06ac0d8c&itok=LzDwPLzE" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">TEMAS</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">SIGUENOS</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
            
            
        </div>
    )
}
