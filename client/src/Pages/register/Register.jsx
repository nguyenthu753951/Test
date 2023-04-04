import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import loginImg from "../../Images/loginimage.svg"
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try { 
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(err.request.response);
    }
  };
  return (
    <div className="register">
      <div className="container">
        <div className="login-left">
          <div className="login-header">
            <h1>Welcome to Our Application</h1>
            <p>Please Register to use the WEBSITE</p>
          </div>
          <form className="login-form" autocomplete="off" onSubmit={handleSubmit}>
            <div className="login-form-content">
              <div className="form-item">
                <label htmlFor="userForm">Enter Username</label>
                <input type="text" id="userForm" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-item">
                <label htmlFor="emailForm">Enter Email</label>
                <input type="email" id="emailForm" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div clasNames="form-item">
                <label htmlFor="passwordForm">Enter Password</label>
                <input type="password" id="passwordForm" onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error && <span style={{color:"red", marginTop:"10px"}}>{error}</span>}
              <button type="submit" className="registerButton">Register</button>
              <button className="loginButton">
                <Link className="link" to="/login">
                  Login
                </Link>
              </button>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img src={loginImg} alt="image" />
        </div>
      </div>
    </div>
  );
}
