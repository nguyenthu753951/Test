import React from 'react'
import './singleTip.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";
function SingleTip() {
  const Location = useLocation();
  const PF = "http://localhost:8800/images/";
  const path = Location.pathname.split("/")[2];
  const [tips, setTips] = useState({});
  useEffect(() => {
    const getTips = async () => {
      const res = await axios.get("/tips/" + path);
      setTips(res.data);
    };
    getTips();
  }, [path]);
  return (
    <div className="singlePost">

      <div className="singlePostWrapper">
        <Link to="/travelTips">
          <button className="tipsButton">back</button>
        </Link>
        {tips.photo && (
          <img
            src={PF + tips.photo}
            alt=""
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">
          {tips.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/travelTips/?nameAdmin=${tips.nameAdmin}`}>
                {tips.nameAdmin}
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(tips.desc),
          }}
          className="singlePostDesc"></p>
      </div>
    </div>
  )
}

export default SingleTip
