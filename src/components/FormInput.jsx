import React, { Component } from "react";
import "../assets/styles/FormInput.less";
export class FormInput extends Component {
  render() {
    return (
      <div className="input-group">
        {/* 字体图标 */}
        <i></i>
        {/* 输入框 */}
        <input type="text" />
      </div>
    );
  }
}

export default FormInput;
