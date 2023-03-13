import Post from "./Post"
import { useNavigate } from "react-router-dom";
import { createElement } from "react";
import { useState } from "react";
import { Smit } from "./Home";
import ReactDOM from "react-dom";

const likeImg = null;
export var isPost = false;
export var media = null;

export default function CreatePost(){
    const nav = useNavigate();
    const [like, setLike] = useState(false);

    function CPost(){
        
       /* const newPost = document.createElement("div");
        newPost.className = "postWrap";
    
        const hder = document.createElement("header");
        hder.className = "user";

        const userImage = document.createElement("img");
        userImage.src = "../pictures/default-profile.png";
        hder.appendChild(userImage);
        
        const post = document.createElement("div");
        post.className = "post";
    
        const commLikes = document.createElement("div");
        commLikes.className = "commLikes";
    
        newPost.appendChild(hder);
        newPost.appendChild(post);
    
        const Likes = document.createElement("button");
        Likes.className = "likes";
    
        const Comm = document.createElement("button");
        Comm.className = "comments";
    
        const Save = document.createElement("button");
        Save.className = "save";
    
        
        setLike ? likeImg.src = "../pictures/like-button.png" : likeImg.src = null;
        

        /*const image = document.createElement("img");
        image.src = "../pictures/like-button.png";
    
        const image2 = document.createElement("img");
        image2.src = "../pictures/comment-button.png";
    
        const image3 = document.createElement("img");
        image3.src = "../pictures/save-button.png";
    
        Likes.appendChild(likeImg);
        Comm.appendChild(image2);
        Save.appendChild(image3);
    
        Likes.addEventListener("click", myFunc);

        /*const info = document.createElement("div");
        info.className = "info";
        info.textContent = "likes | comments"
     
        commLikes.appendChild(Likes);
        commLikes.appendChild(Comm);
        commLikes.appendChild(Save);
        //commLikes.textContent = "likes | comments";

        const text = document.createElement("span");
        text.className = "text";
        text.textContent = "likes | comments";

        
        commLikes.appendChild(text);
        
        newPost.appendChild(commLikes);
        
    
        //const newPost = document.createElement("Post");
        const parent = document.querySelector(".layout");
        //const newPost = createElement(<Post/>);
        //newPost.appendChild(document.createTextNode("hello"));
        //parent.appendChild(newPost);
        parent.append(newPost);*/
    }
    
    
    return(
        <div className="cWrapper">
            <form onSubmit={() => {nav('/home');  myFunc()}}>
                <label id="chooseFile" for="file">  Upload Media </label> <br/>
                <input type="file" id = "file" name="first" ></input><br/>

                <label id="caption" for="user">  Caption </label> <br/>

                <textarea type="text" id = "user" name="first" rows="5" cols="20" required></textarea> <br/>
                <input type="submit" id = "submit" name="submit" value="Upload"></input>
            </form>
        </div>
    )
}

function myFunc(){
    isPost = true;
    media = document.getElementById("file");
    alert(media);
}


    