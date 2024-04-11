import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../core/tools/sendRequest";
import { requestMethods } from "../../../core/enums/requestsMethods";
import { useState } from "react";

const SignupForm = ({ setIsLogin }) => {
  const [Credential, setCredential] = useState({})
  const navigate = useNavigate();

    return (
      <div className="sign">
        <div className="signup-form flex column">
          <div className="heading flex center">
          <img src="https://as2.ftcdn.net/v2/jpg/03/97/48/01/1000_F_397480131_ifXqWNKVteOhczWDJBeODrnMIbVcVp13.jpg" alt="" />

          </div>
          <div className="links flex center column">
            <p>Sign up to see photos and videos from your friends.</p>
            <button>continue with Facebook</button>
            <button>continue with Google</button>
            <span className="flex">
              
              OR
             
            </span>
          </div>
          <div className="s-inputs flex column center">
            <input type="text" placeholder="Email" onChange={(e)=>{
              setCredential({...Credential,name: e.target.value})
            }} />

            <input type="text" placeholder="Email" onChange={(e)=>{
              setCredential({...Credential,email: e.target.value})
            }}/>

            <input type="text" placeholder="Password" onChange={(e)=>{
              setCredential({...Credential,password: e.target.value})
            }}/>
            
            <div className=" pp ">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram.
              </p>
              <p>
                By signing up, you agree to our Terms,{" "}
                <span>Privacy Policy and Cookies Policy .!</span>
              </p>
            </div>
            <button
            onClick={async(e)=>{
              const formatedData = {
                ...Credential
              }
              const res = await sendRequest(
                requestMethods.POST,
                '/register',
                formatedData
              )
              if(res.data.status === 'success'){
                localStorage.setItem('token', res.data.token)
                console.log(res.data.token)
                setIsLogin(true)
              }
              else{
                
              }
            }}
            >Sign up</button>
          </div>
          <div className="link flex center">
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setIsLogin(true);
                }}
              >
                Login
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
      </div>
    );
  };

export default SignupForm
  