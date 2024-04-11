import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../core/tools/sendRequest";
import { requestMethods } from "../../../core/enums/requestsMethods";
import { useState } from "react";


const LoginForm = ({ setIsLogin }) => {
  const [Credential, setCredential] = useState({})
  const navigate = useNavigate();
  const [error, setError] = useState('');

    return (
      <div className="login flex column center">
        <div className="heading flex center">
          <img src="https://as2.ftcdn.net/v2/jpg/03/97/48/01/1000_F_397480131_ifXqWNKVteOhczWDJBeODrnMIbVcVp13.jpg" alt="" />
        </div>
        <div className="inputs flex column center">
          <input type="text" placeholder="Email" onChange={(e) => {
                setCredential({ ...Credential, email: e.target.value });
              }} />
          <input type="text" placeholder="Password" onChange={(e) => {
                setCredential({ ...Credential, password: e.target.value });
              }} />
          <button  onClick={async (e) => {
                e.preventDefault();
                const formatedData = {
                  ...Credential,
                };
                try{
                  const res = await sendRequest(
                  requestMethods.POST,
                  "/login",
                  formatedData
                );
                console.log("Response data:", res.data);
                if (res.data.status === "success" ) {
                  localStorage.setItem("Bearer", res.data.authorization.token);
                  navigate("/home");
              }
                }catch(error){
                  console.error("Login error:", error);
                  setError(error.response.data.message);
                }
                
              }}>Login</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
          <span className="flex">
            <hr className="line" />
            OR
            <hr className="line" />
          </span>
        </div>
        <div className="links flex column center">
          <button>continue with Facebook</button>
          <button>continue with Google</button>
          <span>forget Password?</span>
        </div>
        <div className="link flex center">
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
        <div className="apps flex column center">
          <p>Get the app.</p>
          <div className="imgs">
            <img
              className="mic"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt=""
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt=""
            />
          </div>
        </div>
        
      </div>
    );
  };

  export default LoginForm