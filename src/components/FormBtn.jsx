import React, { Component } from "react";
import "../assets/styles/FormBtn.less";

export class FormBtn extends Component {
  render() {
    return this.props.type === "ordinary" ? (
      <a href="###" className="orda">
        {this.props.children}
      </a>
    ) : (
      // 加上括号提高优先级
      // <button className={"btn " + (this.props.isFull ? "full" : "")}>
      //   {this.props.children}
      // </button>
      <button className={`btn ${this.props.isFull ? "full" : ""}`}>
        {this.props.children}
      </button>
    );
  }
}

export default FormBtn;
