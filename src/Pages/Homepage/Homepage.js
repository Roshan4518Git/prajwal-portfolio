import React from "react";
import photo from "../../Styles/photo.jpg";
import "./SASS/HomepageStyle.css";
export const Homepage = () => {
  return (
    <div>
      <div className="parent">
        <div className="child">
          <div className="main-content">
            <div className="title">
              Choose your Destiny On Your Own
              <p id="subtitle">Always.</p>
            </div>
            <button className="cta-button">Click Me</button>
          </div>
        </div>
        <div className="child">
          <img src={photo} alt="abcd" />
        </div>
        <div className="child"></div>
      </div>
      <div className="exm"></div>
    </div>
  );
};
