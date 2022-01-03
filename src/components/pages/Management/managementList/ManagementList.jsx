import "./managementList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { managementListRows } from "../../../../dummydata";

export default function ManagementList() {
  const [data, setdata] = useState(managementListRows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "Руководство",
      headerName: "Руководство имя",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="managementLisClient">
            <img className="managementListImg" src={params.row.avatar} alt="" />
            {params.row.clientName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Должность",
      width: 140,
    },
    {
      field: "contractNumber",
      headerName: "Телефон",
      width: 140,
    },
    {
      field: "Transitbank",
      headerName: "Факс",
      width: 120,
    },
    {
      field: "servicingbank",
      headerName: "E-mail",
      width: 120,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/management/" + params.row.id}>
              <button className="managementListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="managementListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    
  ];

  return (
    <div className="clientList">
      <div>
      <Link to="/newManagement">
        <button className="managementAddBotton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
