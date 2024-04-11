import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/Signup";

const Authentication = ()=>{
    const [isLogin, setIsLogin] = useState(true);

  
    return (
        <div className="mainpage">
        <div className="home flex center">
         
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