import "./tip.css";
import React from "react";
import DOMPurify from "dompurify";
function Tip({ tip }) {
    const PF = "http://localhost:8800/images/";
    return (
        <div className="tip">
            {tip.photo && <img
                className="blogPostImg"
                src={PF + tip.photo}
                alt=""
            />}

            <div className="tipInfo">
                <span className="tipTitle">{tip.title}</span>
                <hr />
                <span className="tipDate">{new Date(tip.createdAt).toDateString()}</span>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(tip.desc),
                    }}
                    className="tipDes"></p>
            </div>
        </div>
    );
}

export default Tip;