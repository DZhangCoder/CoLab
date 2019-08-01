import React from "react";
import "./style.css";

function ResultsCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.firstName} src={props.imageUrl} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.firstName}
            {/* {results.state.firstName} */}
          </li>
          <li>
            <strong>Bio:</strong> {props.bio}
            {/* {results.state.bio} */}
          </li>
          <li>
            <strong>Instagram:</strong> {props.instagram}
            {/* {results.state.instagram} */}

          </li>
          <li>
            <strong>Other:</strong> {props.other}
            {/* {results.state.other} */}
          </li>
        </ul>
      </div>
      <span className="remove">𝘅</span>
      {/* WE WILL BE ADDING A "FAVORITE" OPTION HERE SO USERS CAN SAVE OTHER USERS */}
    </div>
  );
}

export default ResultsCard;
