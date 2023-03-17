import { useState } from "react"
import { comment } from "./CreateComment";
import { useNavigate } from "react-router-dom";
import { ChangeSign } from "./SignIn";


export default function Post(){
    const [like, setLike] = useState(false);
    

    return(
        <div className = "postWrap">
            
            <header className = "user">
                <div className="userImageWrap">
                    <img src="../pictures/default-profile.png"/> 
                </div>
                
            </header>
            
            
            <div className="post">
                
            </div>

            <div className="commLikes">
                <button className = "likes" onClick={() => setLike(!like)}> {like ? <img src="../pictures/liked-heart.png"/> : <img src="../pictures/unliked-heart.png"/>} </button>
                <button className = "comments" onClick={SubmitComment}> <img src="../pictures/comment-button.png"/>  </button>
                <button className = "save"> <img src="../pictures/save-button.png"/>  </button> 
                <span className="text"> {like ? "1 like(s)" : "0 like(s)"} | 0 comments </span>
                <div id="comms">  </div>
            </div>
            
        </div>
    )
}

function SubmitComment(){
    document.getElementById("commentBox").toggleAttribute("hidden");
}