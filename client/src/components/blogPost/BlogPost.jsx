import "./blogPost.css";
import React from "react";
import DOMPurify from "dompurify";
function BlogPost({post}) {
  const PF = "http://localhost:8800/images/";
  return (
    <div className="blogPost">
      {post.photo && <img
        className="blogPostImg"
        src={PF + post.photo}
        alt=""
      />}
      
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((c)=>(
              <span className="postCat">{c.name}</span>
              
            ))
          }
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
          className="postDes"></p>
      </div>
    </div>
  );
}

export default BlogPost;
