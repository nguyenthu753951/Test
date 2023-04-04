import "./singleBlog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import DOMPurify from "dompurify";
function SingleBlog() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:8800/images/";
  const { admin } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { nameAdmin: admin.nameAdmin },
      });
      window.location.replace("/blogposts");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        nameAdmin: admin.nameAdmin,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) { }
  };
  return (
    <div className="singleBlog">
      <Sidebar />
      <div className="singleBlogContainer">
        <Navbar />
        <div className="singlePost">
          <div className="singlePostWrapper">
            {post.photo && (
              <img src={PF + post.photo} alt="" className="singlePostImg" />
            )}
            {updateMode ? (
              <input
                type="text"
                value={title}
                className="singlePostTitleInput"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h1 className="singlePostTitle">
                {title}
                {post.nameAdmin === admin?.nameAdmin && (
                  <div className="singlePostEdit">
                    <EditIcon
                      className="singlePostIcon far fa-edit"
                      onClick={() => setUpdateMode(true)}
                    />
                    <DeleteIcon
                      className="singlePostIcon far fa-trash-alt"
                      onClick={handleDelete}
                    />
                  </div>
                )}
              </h1>
            )}
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                Author:
                <Link to={`/?admin=${post.nameAdmin}`} className="link">
                  <b> {post.nameAdmin}</b>
                </Link>
              </span>
              <span className="singlePostDate">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
            {updateMode ? (
              <ReactQuill theme="snow" value={desc} onChange={setDesc} />
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(desc),
                }}
              ></p>
            )}
            {updateMode && (
              <button className="singlePostButton" onClick={handleUpdate}>
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
