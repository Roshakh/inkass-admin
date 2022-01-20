import "./VakansiListStyle.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { VakansiRows } from "../../../../dummydata";

export default function VakansiList() {
  const [data, setdata] = useState(VakansiRows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "VakansiName",
      headerName: "Name of the organizatio",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="VakansiListVakansi">
            {params.row.vakansiName}
          </div>
        );
      },
    },
    {
      field: "location",
      headerName: "Location",
      width: 140,
    },
    {
      field: "contractNumber",
      headerName: "Contract number",
      width: 140,
    },
    {
      field: "timeWork",
      headerName: "TimeWork",
      width: 120,
    },
    {
      field: "data",
      headerName: "Data",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/Vakansi/" + params.row.id}>
              <button className="VakansiListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="VakansiListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="VakansiList">
      <div>
      <Link to="/NewVakansi">
        <button className="VakansiAddBotton">Create</button>
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
