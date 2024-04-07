const LoginForm = ({ setIsLogin }) => {
    return (
      <div className="login flex column center">
        <div className="heading flex center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkA4eLYzO589zptEK11phwXKTnAoqtNpUnXDdVOPEQw&s" alt="" />
        </div>
        <div className="inputs flex column center">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Login</button>
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