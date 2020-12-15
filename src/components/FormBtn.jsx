import React, { Component } from "react";
import "../assets/styles/FormBtn.less";

export class FormBtn extends Component {
  render() {
    return (
      <div>
        <button>{this.props.children}</button>
      </div>
    );
  }
}

export default FormBtn;
