import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header"> 
    Score: {props.currentScore} | Top Score: {props.record}
    </div>
);

export default Header;
