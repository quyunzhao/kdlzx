import React, { Component } from "react";
import "../assets/styles/FormInput.less";
import "../assets/fonts/iconfont.css";
export class FormInput extends Component {
  render() {
    return (
      <div className="input-group">
        {/* 字体图标 */}
        <i className="iconfont icon-shouji"></i>
        {/* 输入框 */}
        <input type="text" />
      </div>
    );
  }
}

export default FormInput;
