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
       <div className=" Homee flex">
        <div className="sbar">
            <SideBar />
        </div >
        <div className="pages flex">
            <div className="container">
                <div className="reels">
                <Reels />
            </div>
            <div className="posts">
                <Posts />
            </div>
            </div>
            <div className="rec">

            </div>
        </div>
       </div>
    )
}

export default Home