import axios from "axios";
import "./login.scss";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import loginImg from "../../images/loginimage.svg";
export default function Login() {
  const adminRef = useRef();
  const passwordRef = useRef();
  const { admin, dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("/auth/loginAd", {
        email: adminRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setError(true);
     dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(admin);
  return (
    <div className="login">
      <div className="container">
        <div className="login-left">
          <div className="login-header">
            <h1>Welcome to Admin TravelMate</h1>
            <p>Please login to use the WebSite</p>
          </div>
          <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="login-form-content">
              <div className="form-item">
                <label htmlFor="emailForm">Enter Email</label>
                <input type="text" id="emailForm" ref={adminRef} />
              </div>
              <div className="form-item">
                <label htmlFor="passwordForm">Enter Password</label>
                <input type="password" id="passwordForm" ref={passwordRef} />
              </div>
              
              {error && <span className="error">Something went wrong!</span>}
              <button type="submit" className="loginButton" disabled={isFetching}>Sign In</button>          
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
