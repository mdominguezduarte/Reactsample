import "./settings.css"
import Sidebar from"../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Actualizar cuenta</span>
                    <span className="settingsDeleteTitle">Borrar cuenta</span>
                </div>
                <form className="settingsForm">
                    <label>Foto de perfil</label>
                    <div className="settingsPP">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/River_Lambourn%2C_East_Garston%2C_Berkshire.jpg" 
                            alt=""
                        />
                        </div>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                        <label>Nombre</label>
                        <input type="text" placeholder="Mar"/>
                        <label>Email</label>
                        <input type="email" placeholder="mm@gmail.com"/>
                        <label>Contraseña</label>
                        <input type="password"/>
                        <button className="settingsSubmit">Actualizar</button>
                    
                </form>
            </div>
            <Sidebar/>
        </div>
    );
}
