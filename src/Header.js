import { Link } from "react-router-dom";
import { useState } from "react";


export default function Header(){

    return (
        
            <header className = "hd"> 
                <nav>
                    <h1 className="title"> MATTER </h1>
                    <ul className ="navList">
                        <li><Link to = "/"> Home </Link></li>
                        <li><Link to = "/about"> About </Link></li>
                        <li  className="sign"><Link to = "/sign-in"> <span> Sign In </span> </Link></li>
                        <li hidden className="change"><Link to = "/profile"> Profile </Link></li>

                        {/*<li><a href="#About_Me"> <small id="s1"> Home </small> </a> <big> &nbsp; | </big> </li>
                        <li><a href="#About_Me"> <small> Explore </small> </a> <big> &nbsp; | </big> </li>
    <li id="laste"><a href="signIn.html"> <small> Sign In </small> </a> &nbsp; </li>*/}
                    </ul>
                </nav>
            </header>    
       
    )
}