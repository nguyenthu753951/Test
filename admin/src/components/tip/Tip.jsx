import "./tip.scss"
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
function Tip({ tip }) {
  const PF = "http://localhost:8800/images/";
  return (
    <div className="tip" >
      {tip.photo && <img
        className="tipImg"
        src={PF + tip.photo}
        alt=""
      />}
      <div className="tipInfo">

        <span className="tipTitle">{tip.title}</span>

        <span className="tipDate">{new Date(tip.createdAt).toDateString()}</span>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(tip.desc),
        }}
        className="tipDesc"></p>
    </div>
  )
}

export default Tip