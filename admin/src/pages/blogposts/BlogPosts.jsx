import "./blogposts.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function BlogPost() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])
  return (
    <div className="blogPost">
      <Sidebar />
      <div className="blogPostContainer">
        <Navbar />
        <div className="home">
          <Posts posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
