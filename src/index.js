import ReactDOM from "react-dom";
import SignIn from "./SignIn.js"
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile.js";
import { Navigate } from "react-router-dom";
import CreatePost  from "./CreatePost";

function Footer(){
    return(
        <footer className = "foot">
            &copy; 2022 OMCT Development Team. All rights reserved.
        </footer>
    )
}

function Page(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Layout />}>
                    <Route path="home" element = {<Home />}/>
                    <Route path="sign-in" element = {<SignIn />}/>
                    <Route path="profile" element = {<Profile />}/>
                    <Route path="create-post" element = {<CreatePost />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));