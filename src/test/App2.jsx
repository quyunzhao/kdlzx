import React, { Component } from "react";

import { connect } from "react-redux";

class App1 extends Component {
  render() {
    return (
      <div>
        {/* 4.改写 this.state.myNum 为 this.props.myNum*/}
        <p>{this.props.myNum}</p>
        {/* 增加 */}
        <button onClick={this.props.handleClick.bind(this)}>增加</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myNum: state.num1,
  };
};

// 1.事件写在 mapDispatchToProps 函数中
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(e) {
      // 3. 调用 dispatch(action) ,将管理状态的方案传入当参数
      let action = {
        type: "up",
        // 这里其实修改的是 props 中的 myNum
        value: this.props.myNum + 1,
      };
      dispatch(action); // 这个函数一执行会调用到 reduce
    },
  };
};

// 2.使用 connect 完成连接组件，并把 state 数据转换为 props 数据
// connect(要展示数据的函数，改变数据的函数)
export default connect(mapStateToProps, mapDispatchToProps)(App1);
