import React, { Component } from "react";
import "../assets/styles/FormInput.less";
import "../assets/fonts/iconfont.css";
export class FormInput extends Component {
  render() {
    return (
      <div className="input-group">
        {/* 字体图标 */}
        <i className={"iconfont icon-" + this.props.iconclass}></i>
        {/* 输入框 */}
        {/* <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        /> */}
        {/* 简写 */}
        <input {...this.props} />
      </div>
    );
  }
}

export default FormInput;
