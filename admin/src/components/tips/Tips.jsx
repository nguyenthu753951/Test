import "./tips.scss";
import Tip from "../tip/Tip";
import { Link } from "react-router-dom";
function Tips({tips}) {
  console.log(tips)
  return (
    <div className="tips">
      
      { 
        tips.map((p)=> (
          <Link to={`/travelTips/${p._id}`} className="link">
            <Tip tip={p} key={p._id}/>
          </Link>
        ))
      }  
    </div>
  );
}

export default Tips;
