import React, { Component } from "react";
import "../assets/styles/FormBtn.less";

export class FormBtn extends Component {
  render() {
    return (
      <div>
        {this.props.type === "ordinary" ? (
          <a href="###">{this.props.children}</a>
        ) : (
          <button className="btn">{this.props.children}</button>
        )}
      </div>
    );
  }
}

export default FormBtn;
