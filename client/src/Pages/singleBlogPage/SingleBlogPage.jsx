import "./singleBlogPage.css";
import SingleBlogPost from "../../components/singleBlogPost/SingleBlogPost";

function singleBlogPage() {
  return (
    <div className="singleBlog">
      <div className="singleBlogContainer">
        <div className="singleBlogWrapper">
          
          <SingleBlogPost />
        </div>
      </div>
    </div>
  );
}

export default singleBlogPage;
