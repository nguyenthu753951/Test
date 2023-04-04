import React from "react";
import "./tips.css";
import {Link} from "react-router-dom";
import Tip from "../tip/Tip";
function Tips({tips}) {
  console.log(tips)
  return (
    <div className="tips">
      { 
        tips.map((t) => (
          <Link to={`/travelTips/${t._id}`} className="link">
            <Tip tip={t} key={t._id}/>
          </Link>
        ))
      }  
    </div>
  );
}

export default Tips;
