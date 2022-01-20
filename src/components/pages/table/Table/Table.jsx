import React from "react";
import "./TableStyle.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

export default function Table() {
  return (
    <div className="Table">
      <div className="tableTitleContanier">
        <h1 className="tableTitle">Edit Client</h1>
      </div>
      <div className="tableContainer">
        <div className="tableShow">
          <div className="tableShowTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40E54SbbHNVCaHwCgCBDE9MbwLLzr5e8U1vapTtl63SFxFFW7meaHMb6eAbS1ViT3u8&usqp=CAU"
              alt=""
              className="showtableImg"
            />
            <div className="tableShowTopTittle">
              <span className="tableShowUserName">Jon Snow</span>
              <span className="tableshowUserTitle">SoftWare Enginerr</span>
            </div>
          </div>
          <div className="tableShowBottom">
            <span className="tableShowTitle">Account Details</span>
            <div className="tableShowInfo">
              <PermIdentity className="tableShowIcon" />
              <span className="tableShowInfoTitle">jon342</span>
            </div>
            <div className="tableShowInfo">
              <CalendarToday className="tableShowIcon" />
              <span className="tableShowInfoTitle">12.02.1992</span>
            </div>
            <span className="tableShowTitle">Contact Details</span>
            <div className="tableShowInfo">
              <PhoneAndroid className="clientShowIcon" />
              <span className="tableShowInfoTitle">+998 93 007 0809</span>
            </div>
            <div className="tableShowInfo">
              <MailOutline className="tableShowIcon" />
              <span className="tableShowInfoTitle">jon@mail.com</span>
            </div>
            <div className="tableShowInfo">
              <LocationSearching className="tableShowIcon" />
              <span className="tableShowInfoTitle">Tashkent | UZB</span>
            </div>
          </div>
        </div>
        <div className="tableUpdate">
          <span className="tableUpdateTitle">Edit</span>
          <form className="tableUpdateForm">
            <div className="tableUpdateLeft">
              <div className="tableUpdateItem">
                <label>Clientname</label>
                <input
                  type="text"
                  placeholder="job342"
                  className="tableUpdateInput"
                />
              </div>
              <div className="tableUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Jon Snow"
                  className="tableUpdateInput"
                />
              </div>
              <div className="tableUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="jon@mail.com"
                  className="tableUpdateInput"
                />
              </div>
              <div className="tableUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+998 93 007 0809"
                  className="tableUpdateInput"
                />
              </div>
              <div className="tableUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  placeholder="Tashkent | UZB"
                  className="tableUpdateInput"
                />
              </div>
            </div>
            <div className="tableUpdateRight">
              <div className="tableUpdateUpload">
                <img
                  className="tableUpdateImg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40E54SbbHNVCaHwCgCBDE9MbwLLzr5e8U1vapTtl63SFxFFW7meaHMb6eAbS1ViT3u8&usqp=CAU"
                  alt=""
                />
                <label htmlFor="file"><Publish className="tableUpdateIcon"/></label>
                <input type="file"  id="file"  style={{display:"none"}}/>
              </div>
              <button className="tableUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
