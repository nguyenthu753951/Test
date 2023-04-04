import axios from "axios";
import "./login.css";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import loginImg from "../../Images/loginimage.svg"

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);
  const [idKh, setIdKh] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
     
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err.request.response)
      setError(err.request.response);
      dispatch({ type: "LOGIN_FAILURE" });
      
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="login-left">
          <div className="login-header">
            <h1>Welcome to Our Application</h1>
            <p>Please login to use the platform</p>
          </div>
          <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="login-form-content">
              <div className="form-item">
                <label htmlFor="emailForm">Enter Email</label>
                <input type="email" id="emailForm" ref={userRef} />
              </div>
              <div className="form-item">
                <label htmlFor="passwordForm">Enter Password</label>
                <input type="password" id="passwordForm" ref={passwordRef} />
              </div>
              
              {error && <span className="error">{error}</span>}
              <button type="submit" className="loginButton" disabled={isFetching}>Sign In</button>
              <button className="registerButton">
                <Link className="link" to="/register">
                  Register
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

