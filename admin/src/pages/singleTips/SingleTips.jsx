import "./singleTips.scss";
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
function SingleTips() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [tips, setTips] = useState({});
  const PF = "http://localhost:8800/images/";
  const { admin } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getTips = async () => {
      const res = await axios.get("/tips/" + path);
      setTips(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getTips();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/tips/${tips._id}`, {
        data: { nameAdmin: admin.nameAdmin },
      });
      window.location.replace("/travelTips");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/tips/${tips._id}`, {
        nameAdmin: admin.nameAdmin,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) { }
  };
  return (
    <div className="singleTips">
      <Sidebar />
      <div className="singleTipsContainer">
        <Navbar />
        <div className="singleTip">
          <div className="singleTipsWrapper">
            {tips.photo && (
              <img src={PF + tips.photo} alt="" className="singleTipsImg" />
            )}
            {updateMode ? (
              <input
                type="text"
                value={title}
                className="singleTipsTitleInput"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h1 className="singleTipsTitle">
                {title}
                {tips.nameAdmin === admin?.nameAdmin && (
                  <div className="singleTipsEdit">
                    <EditIcon
                      className="singleTipsIcon far fa-edit"
                      onClick={() => setUpdateMode(true)}
                    />
                    <DeleteIcon
                      className="singleTipsIcon far fa-trash-alt"
                      onClick={handleDelete}
                    />
                  </div>
                )}
              </h1>
            )}
            <div className="singleTipsInfo">
              <span className="singleTipsAuthor">
                Author:
                <Link to={`/?admin=${tips.nameAdmin}`} className="link">
                  <b> {tips.nameAdmin}</b>
                </Link>
              </span>
              <span className="singleTipsDate">
                {new Date(tips.createdAt).toDateString()}
              </span>
            </div>
            {updateMode ? (
              
              <ReactQuill theme="snow" value={desc} onChange={setDesc} />
              
            ) : (
              <p className="singleTipsDesc"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(desc),
                }}></p>
            )}
            {updateMode && (
              <button className="singleTipsButton" onClick={handleUpdate}>
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTips;
