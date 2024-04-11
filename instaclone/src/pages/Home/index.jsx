import React from "react"
import SideBar from "./component/sidebar/sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Reels from "./component/reels/reels";
import Posts from "./component/posts/posts";
import "./home.css"





const Home = ()=>{
    // const [isOpend,setIsOpened] = useState(true)
    return (
       <div className=" Homee flex ">
        <div className="home-side-bar">
            <SideBar />
        </div>
        <div className="reels">
            <Reels />
        </div>
       </div>
    )
}

export default Home