import Navbar from "../components/Navbar";

const Login = ({ setIsLoggedIn }) => {
  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-left">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/todo-list-3d-icon-png-download-8168038.png"
            alt="todo"
          />
        </div>

        <div className="login-right">
          <h2>Sign in</h2>

        <div className="socials">
  <button className="social-btn facebook" aria-label="Facebook">
    <i className="fab fa-facebook-f">F</i>
  </button>

  <button className="social-btn twitter" aria-label="Twitter">
    <i className="fab fa-twitter">X</i>
  </button>

  <button className="social-btn linkedin" aria-label="LinkedIn">
    <i className="fab fa-linkedin-in">Li</i>
  </button>
</div>


          <p className="or">or</p>

          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span>Forgot password?</span>
          </div>

          <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
            LOGIN
          </button>

          <p className="register">
            Don’t have an account? <span>Register</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
