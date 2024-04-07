
const SignupForm = ({ setIsLogin }) => {
    return (
      <div className="sign">
        <div className="signup-form flex column">
          <div className="heading flex center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkA4eLYzO589zptEK11phwXKTnAoqtNpUnXDdVOPEQw&s" alt="" />
          </div>
          <div className="links flex center column">
            <p>Sign up to see photos and videos from your friends.</p>
            <button>continue with Facebook</button>
            <button>continue with Google</button>
            <span className="flex">
              <hr className="line" />
              OR
              <hr className="line" />
            </span>
          </div>
          <div className="s-inputs flex column center">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
            <div className=" pp flex column center">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram.
              </p>
              <p>
                By signing up, you agree to our Terms,{" "}
                <span>Privacy Policy and Cookies Policy .!</span>
              </p>
            </div>
            <button>Sign up</button>
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
  