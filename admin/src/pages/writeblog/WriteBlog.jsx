import "./writeblog.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { Context } from "../../context/Context";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useContext, useState } from "react";
function WriteBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { admin } = useContext(Context);
  const [value, setValue] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      nameAdmin: admin.nameAdmin,
      title,
      desc: value,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/blogposts/" + res.data._id);
    } catch (err) { }
  };
  return (
    <div className="writeBlog">
      <Sidebar />
      <div className="writeBlogWrapper">
        <Navbar />
        <div className="write">
          {file && (
            <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
          )}
          <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <UploadFileIcon className="writeIcon fas fa-plus" />
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                autoFocus={true}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WriteBlog;
