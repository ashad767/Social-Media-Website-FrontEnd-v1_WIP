import { Navigate, redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
//import { ChangeSign } from "./Header";


export default function SignIn(){
    const nav = useNavigate();

    return(
        <div className = "wrapper">
            <div className = "signin">
            
                <h2 id ="signin-text"> SIGN IN </h2> 
            
                <form onSubmit={() => {ChangeSign(); nav('/home')}}>
                    <label id="userlabel"> <strong> Username </strong> </label>
                    <input type="text" id = "username" name="first" required></input>
                    <label id="passlabel"> <strong> Password </strong> </label>
                    <input type="text" id = "password" name="last" required></input>
                    <input type="submit" id="signin" value="Sign in" ></input>
                </form>

                <hr id = "signup" ></hr>
                <h2 id ="signup-text"> SIGN UP </h2>
            <button id="signupb" onclick = "window.location.href='signUp.html'"> CREATE ACCOUNT </button>
            </div>
        </div>
    )
}

export function ChangeSign(){
    document.querySelector(".sign").toggleAttribute("hidden");
    document.querySelector(".change").toggleAttribute("hidden");
    
    document.querySelector(".afeedContainer").toggleAttribute("hidden");
    //document.querySelector(".afeed").toggleAttribute("hidden");
    //document.querySelector(".afeed").toggleAttribute("hidden");
    //document.getElementById(").toggleAttribute("hidden");
}