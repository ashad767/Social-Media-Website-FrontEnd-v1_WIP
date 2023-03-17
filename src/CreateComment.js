import { useNavigate } from "react-router-dom";
import { useState } from "react";

export var comment = ""

export default function CreateComment(){

    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById("commentBox").toggleAttribute("hidden");
        if(document.getElementById("commInput").value == "")
            return;
        const text = document.createElement("p");
        const commentSection = document.getElementById("comms");
        text.textContent = comment;
        commentSection.appendChild(text);
        document.getElementById("commInput").value = "";
    }
    

    const change = event => {
        comment = event.target.value;
    }

    return(
        <div id="commentBox" hidden>
            <form onSubmit={handleSubmit}>
                    Enter your comment:
                        <input 
                        type="text" 
                        id="commInput"
                        onChange={change}
                        required
                        
                        />
                   
                <input type="submit" />
            </form>
        </div>
    )
}

function SubmitComment(){
    
    
    
}

function PrintComment(){
    //const x = document.getElementById("commInput").value;
    //const commentSection = document.getElementById("comms");
    //alert(x);
    //const comment = document.createTextNode(x);
   

   /* const text = document.createElement("span");
        
        text.textContent = "likes | comments";
        commentSection.appendChild(text);*/
    document.querySelector(".sign").toggleAttribute("hidden");
 
}