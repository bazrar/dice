import reactDom from "react-dom";
import React from "react";
import "./Die.css";

export default class Die extends React.Component {
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.face} ${
          this.props.rolling && "rolling"
        } `}
      ></i>
    );
  }
}
