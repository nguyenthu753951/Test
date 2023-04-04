import "./blogHome.css";
import React from "react";
import BlogImg from "../../Images/travelBlogHeader.jpg";
function BlogHome() {
  return (
    <div className="headerBlog">
      <div className="headerBlogTitle">
        <span className="headerBlogTitleMg">Travel & Advices</span>
        <span className="headerBlogTitleLg">BLOG</span>
      </div>
      <img src={BlogImg} alt="" className="headerBlogImg" />
    </div>
  );
}

export default BlogHome;
