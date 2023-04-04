import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
function Navbar() {
  const { admin, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const PF = "http://localhost:8800/images/"
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarSearch">
          <input type="text" placeholder="Search.. " name="" id="searchNavbar" />
          <SearchOutlinedIcon className="navbarItemIcon" />
        </div>
        <div className="navbarItems">
          <Link to="/">
            <div className="navbarItem">
              <LogoutIcon onClick={handleLogout} className="navbarItemIcon" />
            </div>
          </Link>


          <div className="navbarItem">
            <DarkModeOutlinedIcon className="navbarItemIcon" />
          </div>
          <div className="navbarItem">
            <FullscreenExitOutlinedIcon className="navbarItemIcon" />
          </div>
          <div className="navbarItem">
            <NotificationsNoneOutlinedIcon className="navbarItemIcon" />
            <div className="counter">1</div>
          </div>
          <div className="navbarItem">
            <ChatBubbleOutlineOutlinedIcon className="navbarItemIcon" />
            <div className="counter">2</div>
          </div>
          <div className="navbarItem">
            <ListOutlinedIcon className="navbarItemIcon" />
          </div>
          <div className="navbarItem">
            {admin ? (
              <Link to="/">
                <img
                  src={admin.img ? PF + admin.img : "https://images.unsplash.com/photo-1566903697359-6f8ee1c1ab20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWUlMjBjdXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                  alt=""
                  className="avatar"
                />
              </Link>
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
      </div>
    </div>
  );
}

export default Navbar;
