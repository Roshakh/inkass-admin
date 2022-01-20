import "./TableListStyle.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TableRows } from "../../../../dummydata";

export default function TableListStyle() {
  const [data, setdata] = useState(TableRows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "table1",
      headerName: "Размер инкассируемой наличной денежной выручки в течении месяца",
      width: 300,
      // renderCell: (params) => {
      //   return (
      //     <div className="TableListTable">
      //       <img className="TableListImg" src={params.row.avatar} alt="" />
      //       {params.row.TableName}
      //     </div>
      //   );
      // },
    },
    {
      field: "table2",
      headerName: "Тариф “процентный” *(в зависимости от инкассированной суммы в месяц)",
      width: 130,
    },
    {
      field: "table3",
      headerName: "Тариф “фиксированная цена” **(абонентская плата  за месяц)",
      width: 130,
    },
    {
      field: "table4",
      headerName: "Тариф “заезд” ***(цена одного заезда)",
      width: 120,
    },
    {
      field: "table5",
      headerName: "Ограниченное количество заездов в месяц",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/Table/" + params.row.id}>
              <button className="TableListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="TableListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="TableList">
      <div>
      <Link to="/TableAdd">
        <button className="TableAddBotton">Create</button>
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
