import { useState } from "react"
import { media } from "./CreatePost";
import { useNavigate } from "react-router-dom";

export default function Post(){
    const [like, setLike] = useState(false);
    const nav = useNavigate();

    return(
        <div className = "postWrap">
            
            <header className = "user">
                <div className="userImageWrap">
                    <img src="../pictures/default-profile.png"/> 
                </div>
                
            </header>
            
            
            <div className="post">
                <img src = {media} />
            </div>

            <div className="commLikes">
                <button className = "likes" onClick={() => setLike(!like)}> {like ? <img src="../pictures/liked-heart.png"/> : <img src="../pictures/unliked-heart.png"/>} </button>
                <button className = "comments" onClick={SubmitComment}> <img src="../pictures/comment-button.png"/>  </button>
                <button className = "save"> <img src="../pictures/save-button.png"/>  </button> 
                <span className="text"> {like ? "1 like(s)" : "0 like(s)"} | 0 comments </span>
            </div>
            
        </div>
    )
}

export function CreateComment(){
    return(
        <div id="commentBox" hidden>
            <form onSubmit={ () => {SubmitComment(), nav('/home')}}>

                <label id="caption" >  Comment </label> <br/>

                <textarea type="text" required> </textarea> <br></br>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

function SubmitComment(){
    document.getElementById("commentBox").toggleAttribute("hidden");
}