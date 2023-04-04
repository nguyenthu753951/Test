import "./travelTips.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Tips from "../../components/tips/Tips";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function TravelTips() {
  const [tips, setTips] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchTips = async () => {
      const res = await axios.get("/tips" + search)
      setTips(res.data)
    }
    fetchTips()
  }, [search])
  return (
    <div className="travelTips">
      <Sidebar />
      <div className="travelTipsContainer">
        <Navbar />
        <div className="home">
          <Tips tips={tips} />
        </div>
      </div>
    </div>
  );
}

export default TravelTips;
