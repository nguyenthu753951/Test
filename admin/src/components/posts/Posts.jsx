import "./posts.scss";
import Post from "../post/Post";
import { Link } from "react-router-dom";
function Posts({posts}) {
  console.log(posts)
  return (
    <div className="posts">
      
      { 
        posts.map((p)=> (
          <Link to={`/blogposts/${p._id}`} className="link">
            <Post post={p} key={p._id}/>
          </Link>
        ))
      }  
    </div>
  );
}

export default Posts;
