import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArticleIcon from "@mui/icons-material/Article";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import EditOffIcon from '@mui/icons-material/EditOff';

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="topSidebar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MateAdmin</span>
        </Link>
      </div>
      <div className="centerSidebar">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="Icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="Icon" />
              <span>User</span>
            </li>
          </Link>
          <Link to="/blogposts" style={{ textDecoration: "none" }}>
            <li>
              <ArticleIcon className="Icon" />
              <span>Blog Manager</span>
            </li>
          </Link>

          <Link to="/writeblog" style={{ textDecoration: "none" }}>
            <li>
              <HistoryEduIcon className="Icon" />
              <span>Write Blog</span>
            </li>
          </Link>
          <Link to="/travelTips" style={{ textDecoration: "none" }}>
            <li>
              <TipsAndUpdatesIcon className="Icon" />
              <span>TravelTips</span>
            </li>
          </Link>
          <Link to="/writeTips" style={{ textDecoration: "none" }}>
            <li>
              <EditOffIcon className="Icon" />
              <span>Write Tips</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <LeaderboardIcon className="Icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className="Icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="Icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="Icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="Icon" />
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <SettingsIcon className="Icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="Icon" />
            <span>Logout </span>
          </li>
        </ul>
      </div>
      <div className="bottomSidebar">
        <div className="colorOption "></div>
        <div className="colorOption "></div>
      </div>
    </div>
  );
}

export default Sidebar;
