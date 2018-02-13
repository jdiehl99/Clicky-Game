import React from "react";
import "./Header.css";

const Header = props => (
    <div>
    <div className="header"> 
    Score: {props.currentScore} | Top Score: {props.record}
    </div>
    <h3>{props.alert}</h3>
    </div>
);

export default Header;
