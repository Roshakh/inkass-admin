import React from "react";
import "./review.css";

export default function Review() {
  return (
    <div className="newReview">
      <div className="newReviewTitle">
        <h1 className="newReviewname">New Review</h1>
        <from className="newReviewForm">
          <div className="newReviewItemImg">
            <label>UserImage</label>
            <input type="file" />
          </div>
          <div className="newReviewItem">
            <label>Full name</label>
            <input type="text" placeholder="Jon Snow" />
          </div>
          <div className="newReviewItem">
            <label>Adress</label>
            <input type="text" placeholder="Tashkent | UZB" />
          </div>
          <div className="newReviewItem">
            <label>Password</label>
            <input type="text" placeholder="password" />
          </div>
          <div className="newReviewItem">
            <label>Phone</label>
            <input type="text" placeholder="+998 93 007 0809" />
          </div>
          <div className="newReviewItem">
            <label>Job responsibilities </label>
            <input type="text" placeholder="Director" />
          </div>
          <div className="newUserItem">
            <label>Fax</label>
            <input type="text" placeholder="+9989 89 899 99 99" />
          </div>
          <div className="newReviewItem">
            <label>Active</label>
            <select className="newReviewSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newReviewButton">Create</button>
        </from>
      </div>
    </div>
  );
}
