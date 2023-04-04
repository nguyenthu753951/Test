import React from "react";
import "./blogPosts.css";
import {Link} from "react-router-dom";
import BlogPost from "../blogPost/BlogPost";
function BlogPosts({ posts }) {
  console.log(posts)
  return (
    <div className="blogPosts">
      { 
        posts.map((p)=> (
          <Link to={`/travelBlog/${p._id}`} className="link">
            <BlogPost post={p} key={p._id}/>
          </Link>
        ))
      }  
    </div>
  );
}

export default BlogPosts;
