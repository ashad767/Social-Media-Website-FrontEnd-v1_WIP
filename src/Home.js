import SideBar from "./SideBar"
import Post from "./Post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isPost } from "./CreatePost";


export default function Home(){
    return(
        <div id = "home">
          {isPost ? <Post /> : null} 
          
        </div>
    )
}
