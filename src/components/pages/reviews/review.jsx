import React from "react";
import ReactStars from "react-rating-stars-component";
import "./review.css";
import {
  // CalendarToday,
  // LocationSearching,
  // MailOutline,
  // PermIdentity,
  // PhoneAndroid,
  Publish,
} from "@mui/icons-material";

export default function Review() {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="newReview">
      <div className="ReviewBox">
          <div className="Review">
              <h1>Кто мы?</h1>
              <textarea className="TextReviewInput" type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          </div>
      </div>
      <div className="ReviewBoxRight">
          <div className="ReviewRight">
              <h1>Почему мы?</h1>
              <textarea className="TextReviewInputRight" type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          </div>
      </div>
      <div className="ReviewTime">
        <div>
          <img src="" alt="" />
        </div>
        <div className="ReviewTimeInput">
          <input type="text" />
          <input type="text" />
        </div>
        <div  className="ReviewTimeInput">
          <input type="text" />
          <input type="text" />
        </div>
        <div  className="ReviewTimeInput">
          <input type="text" />
          <input type="text" />
        </div>
        <div  className="ReviewTimeInput">
          <input type="text" />
          <input type="text" />
        </div>
      </div>
      <div className="ReviewBox">
          <div className="Review">
              <h1>Кто мы?</h1>
              <textarea className="TextReviewInput" type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          </div>
      </div>
      <div className="newReviewTitle">
       <h1>Что о нас говорят?</h1>
      </div>
      <div className="newReviewBox">
      <div className="newReviewOne">
        <div className="newReviewImage">
          <div className="newReviewContent">
            <div className="newReviewImageUplod">
            <label htmlFor="file"><Publish className="ReviewUpdateIcon"/></label>
              <input type="file" id="file" style={{display:"none"}}/>
            </div>
          </div>            
          <div className="newReviewName">
              <input type="text"  placeholder="Name"/>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={22}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="blue"
             />
          </div>
        </div>
        <div className="newReviewInputBox">
        <input className="newReviewInput1" type="text" placeholder="Лучшие в своём деле" />
          <textarea className="newReviewInput" type="text"></textarea>
        </div>
      </div>
      <div className="newReviewOne">
        <div className="newReviewImage">
          <div className="newReviewContent">
          <div className="newReviewImageUplod">
          <label htmlFor="file"><Publish className="ReviewUpdateIcon"/></label>
              <input type="file" id="file" style={{display:"none"}}/>
          </div>
          </div>            
          <div className="newReviewName">
          <input type="text"  placeholder="Name"/>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={22}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="blue"
             />
          </div>
        </div>
        <div className="newReviewInputBox">
        <input className="newReviewInput1" type="text" placeholder="Лучшие в своём деле" />
          <textarea className="newReviewInput" type="text"></textarea>
        </div>
      </div>
      <div className="newReviewOne">
        <div className="newReviewImage">
          <div className="newReviewContent">
          <div className="newReviewImageUplod">
          <label htmlFor="file"><Publish className="ReviewUpdateIcon"/></label>
              <input type="file" id="file" style={{display:"none"}}/>
          </div>
          </div>            
          <div className="newReviewName">
          <input type="text"  placeholder="Name"/>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={22}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="blue"
             />
          </div>
        </div>
        <div className="newReviewInputBox">
          <input className="newReviewInput1" type="text" placeholder="Лучшие в своём деле" />
          <textarea className="newReviewInput" type="text"></textarea>
        </div>
      </div>
      </div>
    </div>
  );
}
