import React from "react";
import "./TableAddStyle.css";

export default function TableAdd() {
  return (
    <div className="TableAdd">
      <div className="newTableTitle">
        <from className="newTableForm">
          <div className="newTableItem">
            <label>Clientname</label>
            <input type="text" placeholder="jon" />
          </div>
          <div className="newTableItem">
            <label>Full name</label>
            <input type="text" placeholder="Jon Snow" />
          </div>
          <div className="newTableItem">
            <label>Adress</label>
            <input type="text" placeholder="Tashkent | UZB" />
          </div>
          <div className="newTableItem">
            <label>Password</label>
            <input type="text" placeholder="password" />
          </div>
          <div className="newTableItem">
            <label>Phone</label>
            <input type="text" placeholder="+998 93 007 0809" />
          </div>
          <div className="newTableItem">
            <label>Job responsibilities </label>
            <input type="text" placeholder="Director" />
          </div>
          <div className="newTableItem">
            <label>Fax</label>
            <input type="text" placeholder="+9989 89 899 99 99" />
          </div>
          <div className="newTableItem">
            <label>Active</label>
            <select className="newTableSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newTableButton">Create</button>
        </from>
      </div>
    </div>
  );
}
