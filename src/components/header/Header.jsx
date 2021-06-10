import "./header.css"

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Reciclaje y Gestión de Residuos</span>
                <span className="headerTitleLg">Reciclaje, Compostaje, Vertederos...</span>

            </div>

            <img className="headerImg"
            src="https://www.formate.es/wp-content/uploads/2020/12/Mala-gestion-de-residuos-consecuencias-scaled.jpg"
            alt=""/>
        </div>
    )
}