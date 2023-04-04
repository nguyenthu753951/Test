import "./singleBlogPost.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
function SingleBlogPost() {
  const Location = useLocation();
  const PF = "http://localhost:8800/images/";
  const path = Location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="singleBlogPost">
      <Link to="/travelBlog">
        <button className="sgpButton">back</button>
      </Link>

      <div className="singlePostWrapper">

        {post.photo && (
          <img
            src={PF + post.photo}
            alt=""
            className="singlePostImg"
          />
        )}

        <h1 className="singlePostTitle">
          <p>{post.title}</p>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <Link to={`/travelBlog/?nameAdmin=${post.nameAdmin}`} className="link"><b>{post.nameAdmin}</b></Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
          className="singlePostDesc"></p>
      </div>
    </div>
  );
}

export default SingleBlogPost;
