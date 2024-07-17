import "./App.css";

function App() {
  return (
    <>
      <div className="singupForm">
        <label>Enter Name</label>
        <input type="text" name="name" className="myInput" />
        <label>Enter E-mail</label>
        <input type="email" name="email" className="myInput" />
        <label>Enter Mob.</label>
        <input type="number" name="mob" className="myInput" />
        <label>Enter Password</label>
        <input type="password" name="pass" className="myInput" />

        <i id="pass-toggle" className="fa-regular fa-eye"></i>
        <label>Confirm Password</label>
        <input type="password" name="conpass" className="myInput" />
        <i id="conpass-toggle" className="fa-regular fa-eye"></i>
        <button className="btnRegister">Register</button>

        <p>Forgot Password</p>
        <p>Already have an account?</p>
      </div>
      <div className="loginForm">
        <label>Enter E-mail or Mob. No.</label>
        <input type="email" name="email" className="myInput" />
        <label>Enter Password</label>
        <input type="password" name="pass" className="myInput" />

        <i id="pass-toggle" className="fa-regular fa-eye"></i>
        <button className="btnLogin">Login</button>

        <p>Forgot Password</p>
        <p>No Account ! Sign up</p>
      </div>
    </>
  );
}

export default App;
