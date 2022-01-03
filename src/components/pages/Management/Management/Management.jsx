import React from "react";
import "./management.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";

export default function Management() {
  return (
    <div className="management">
      <div className="managementTitleContanier">
        <h1 className="managementTitle">Edit Client</h1>
        
      </div>
      <div className="managementContainer">
        <div className="managementShow">
          <div className="managementShowTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40E54SbbHNVCaHwCgCBDE9MbwLLzr5e8U1vapTtl63SFxFFW7meaHMb6eAbS1ViT3u8&usqp=CAU"
              alt=""
              className="showmanagementImg"
            />
            <div className="managementShowTopTittle">
              <span className="managementShowUserName">Jon Snow</span>
              <span className="managementshowUserTitle">SoftWare Enginerr</span>
            </div>
          </div>
          <div className="managementShowBottom">
            <span className="managementShowTitle">Account Details</span>
            <div className="managementShowInfo">
              <PermIdentity className="managementShowIcon" />
              <span className="managementShowInfoTitle">jon342</span>
            </div>
            <div className="managementShowInfo">
              <CalendarToday className="managementShowIcon" />
              <span className="managementShowInfoTitle">12.02.1992</span>
            </div>
            <span className="managementShowTitle">Contact Details</span>
            <div className="managementShowInfo">
              <PhoneAndroid className="managementShowIcon" />
              <span className="managementShowInfoTitle">+998 93 007 0809</span>
            </div>
            <div className="managementhowInfo">
              <MailOutline className="managementShowIcon" />
              <span className="managementShowInfoTitle">jon@mail.com</span>
            </div>
            <div className="managementShowInfo">
              <LocationSearching className="managementShowIcon" />
              <span className="managementShowInfoTitle">Tashkent | UZB</span>
            </div>
          </div>
        </div>
        <div className="clientUpdate">
          <span className="clientUpdateTitle">Edit</span>
          <form className="clientUpdateForm">
            <div className="clientUpdateLeft">
              <div className="clientUpdateItem">
                <label>Clientname</label>
                <input
                  type="text"
                  placeholder="job342"
                  className="clientUpdateInput"
                />
              </div>
              <div className="clientUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Jon Snow"
                  className="clientUpdateInput"
                />
              </div>
              <div className="clientUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="jon@mail.com"
                  className="clientUpdateInput"
                />
              </div>
              <div className="clientUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+998 93 007 0809"
                  className="clientUpdateInput"
                />
              </div>
              <div className="clientUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  placeholder="Tashkent | UZB"
                  className="clientUpdateInput"
                />
              </div>
            </div>
            <div className="clientUpdateRight">
              <div className="clientUpdateUpload">
                <img
                  className="clientUpdateImg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg40E54SbbHNVCaHwCgCBDE9MbwLLzr5e8U1vapTtl63SFxFFW7meaHMb6eAbS1ViT3u8&usqp=CAU"
                  alt=""
                />
                <label htmlFor="file"><Publish className="clientUpdateIcon"/></label>
                <input type="file"  id="file"  style={{display:"none"}}/>
              </div>
              <button className="clientUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
