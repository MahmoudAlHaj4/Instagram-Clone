import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/Signup";

const Authentication = ()=>{
    const [isLogin, setIsLogin] = useState(false);

  
    return (
        <div className="main">
        <div className="home flex center">
          <div className="insta">
            <img src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot2.png?__d=www" alt="" />
          </div>
          <div className="login-form flex ">
            <div className="box">
              {isLogin ? (
                <LoginForm setIsLogin={setIsLogin} />
              ) : (
                <SignupForm setIsLogin={setIsLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    );

  };

export default Authentication