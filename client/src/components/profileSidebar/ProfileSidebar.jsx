import "./profileSidebar.css";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { Context } from "../../context/Context";
import userImage from "../../Images/tempa.webp"
function ProfileSidebar() {
  
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const PF = "http://localhost:8800/images/"
  return (
    <div className="profileSidebar">
      <img
        src= {user.img ? PF+user.img : userImage}
        alt=""
        className="profileImg"
      />
      <h1>{user.username}</h1>
      <p className="profileBio">
          {user.bio}
      </p>
      <Link to="/">
        <button onClick={handleLogout} className="buttonLogout">LOGOUT</button>
      </Link>
      
    </div>
  );
}

export default ProfileSidebar;
