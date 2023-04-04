import {
  
  faBed,
  faTaxi,
  faHome,
  faMap,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import {FaFly} from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-date-range/dist/styles.css"; // main css file

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";
import { Context } from "../../context/Context";
import "./header.css";

import { Link } from "react-router-dom";

function Header({ type }) {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const handleSearch = () => {
    navigate("/places", { state: { destination } });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate("/places", { state: { destination} });
    }
  };
  return (
    <div className="header">
      <div className="headerContainer">
        {type !== "list" && (
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faHome} className="headerIcon" />
              <span>Home</span>
            </div>
            <div className="headerListItem">
              <Link to="/booking">
                <FontAwesomeIcon icon={faBlog} className="headerIcon" />
                <span>Booking Hotel</span>
              </Link>
            </div>
            <div className="headerListItem">
              <Link to="/travelBlog">
                <FontAwesomeIcon icon={faBlog} className="headerIcon" />
                <span>Travel Blog</span>
              </Link>
            </div>
            <div className="headerListItem">
              <Link to="/travelPins">
                <FaMapMarkedAlt icon={faBed} className="headerIcon" />
                <span>Travel Pins</span>
              </Link>
            </div>
            <div className="headerListItem">
              <Link to="/travelTips">
                <MdTipsAndUpdates icon={faTaxi} className="headerIcon" />
                <span>Travel Tips</span>
              </Link>

            </div>
          </div>
        )}
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Easy to go everywhere!</h1>

            <p className="headerDesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium nemo animi quo magnam repellat dignissimos aliquam,
              corrupti reprehenderit inventore recusandae quidem iusto
              laudantium fuga, nihil quae, doloribus impedit mollitia!
            </p>
            {
              !user &&
              <Link to="/login">
                <button className="headerBtn">Sign in / Register</button>
              </Link>
            }



            <div className="headerSearch">
              <div className="headerSearchItem">
                <FaFly className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you go ?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
               
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
