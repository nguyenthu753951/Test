import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../datatablesource"
import { useState,useEffect } from "react";
import axios from "axios";

function Datatable({columns}) {
  const [lists, setLists] = useState([]);
  console.log(userRows);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/users" )
      setLists(res.data)
      console.log(res.data)
    }
    fetchPosts()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
      setLists(lists.filter((item) => item._id !== id));
    } catch (err) {}
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        )
      }
    }
  ]
  return (
    <div className="dataTable">
      <div style={{ height: "90vh", width: "100%" }}>
        <DataGrid
          rows={lists}
          columns={userColumns.concat(actionColumn)}
          pageSize={14}
          rowsPerPageOptions={[9]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
}

export default Datatable;
