import React, { Component } from "react";

import { connect } from "react-redux";

class App1 extends Component {
  render() {
    return (
      <div>
        {/* 4.改写 this.state.myNum 为 this.props.myNum*/}
        <p>{this.props.myNum}</p>
        {/* 增加 */}
        <button>增加</button>
      </div>
    );
  }
}

// 3. 定义 state 数据转换为 props 数据的函数
const mapStateToProps = (state) => {
  return {
    myNum: state.num1,
  };
};

// 2.使用 connect 完成连接组件，并把 state 数据转换为 props 数据
export default connect(mapStateToProps, null)(App1);
