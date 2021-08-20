import React from "react";
import photo from "../../Styles/photo.jpg";
import "./SASS/HomepageStyle.css";
import { Graphs } from "../Graphs.js";
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
        <div className="child">
          <div className="skill-sec">
            <h5>My Skills</h5>
            <p>
              hello my name is praajwal dnyaneshwarrao padal, iam studying in
              MGM JNEC College, Aurangabad
            </p>
            <div className="box-container">
              {Graphs.map((graph, key) => {
                return (
                  <div key={key}>
                    {graph.graph1}
                    {graph.graph2}
                    {graph.graph3}
                    {graph.graph4}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="exm"></div>
    </div>
  );
};
