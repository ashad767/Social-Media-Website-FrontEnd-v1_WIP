import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Post from "./Post";
import SignIn from "./SignIn";
import { CreateComment } from "./Post";

const Layout = () => {
    
  return (
    <div className="layout" id="layout">
       
            <Header />
            <SideBar />
            <Post/>

            <CreateComment />
            

        <Outlet />

    </div>
  )
};

export default Layout;