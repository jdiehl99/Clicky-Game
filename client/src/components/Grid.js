import React from "react";
import "./Grid.css";

const Grid = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Grid;