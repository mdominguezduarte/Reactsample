import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img
            className="writeImg"
            src="https://www.catedracogersa.com/html5Upload/server/php/files/medium/pollution-3441119640.jpg"
            alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writwIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}}/>
                    <input type="text" placeholder="Titulo" className="writeInput" autoFocus={true}/>

                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Explicanos..."
                    type="text" className="writeInput writeText">

                    </textarea>
                </div>
                <button className="writeSubmit">Publicar</button>
            </form>
        </div>
    )
}
