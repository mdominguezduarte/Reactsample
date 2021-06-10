import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" 
            src="https://www.catedracogersa.com/html5Upload/server/php/files/medium/pollution-3441119640.jpg"
            alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Tema 1</span>
                <span className="postCat">Tema 2</span>
            </div>
            <span className="postTitle">
                Loren ipsum dolor sit amet
            </span>
            <hr/>
            <span className="postDate">Hace una hora</span>
        </div>
        <p className="postDesc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoreuia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>        </div>
    )
}
