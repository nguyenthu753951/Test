import "./navbar.css";
import logo from "../../Images/Logomate.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AiFillCalendar } from "react-icons/ai";
import { Context } from "../../context/Context";
import userImage from "../../Images/tempa.webp"
function Navbar() {
  const { user } = useContext(Context);
  const PF = "http://localhost:8800/images/"

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />

        </Link>
        {user ? (
          <div className="navOrder">
            <Link to="/order">
              <AiFillCalendar className="navOrderIcon" />
            </Link>

            <Link to="/profilesetting">
              <img
                src={user.img ? PF + user.img : userImage}
                alt=""
                className="navBarImgUser"
              />
            </Link>
          </div>
        ) : (
          <div className="navItems">
            <Link className="link" to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link className="link" to="/login">
              <button className="navButton">Login</button>
            </Link>

          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
