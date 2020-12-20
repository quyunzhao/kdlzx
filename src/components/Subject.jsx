import React, { Component } from "react";

import { Flex } from "antd-mobile/dist/antd-mobile.min";

import "../assets/styles/subject.less";

import axios from "axios";

import { connect } from "react-redux";

class Subject extends Component {
  // constructor(prop) {
  //   super(prop);
  //   this.state = {
  //     subject_data: [],
  //   };
  // }

  componentDidMount() {
    // 请求数据
    axios.get("/server/subject.json").then((response) => {
      const subList = response.data;
      console.log(subList);

      this.props.init_subject_data(subList);
      // this.setState({
      //   subject_data: subList,
      // });
    });
  }

  render() {
    return (
      <div className="subject">
        {/* 第一行 */}
        <Flex>
          {this.props.subject_data.map((v, k) => {
            if (k < 4) {
              return (
                <Flex.Item key={v.id}>
                  <a href={"#/list/" + v.id}>
                    <i style={{ backgroundPositionX: -50 * k }}></i>
                    <p>{v.subjectName}</p>
                  </a>
                </Flex.Item>
              );
            }
            return "";
          })}
        </Flex>

        {/* 第二行 */}
        <Flex>
          {this.props.subject_data.map((v, k) => {
            if (k > 3) {
              return (
                <Flex.Item key={v.id}>
                  <a href={"#/list/" + v.id}>
                    <i style={{ backgroundPositionX: -50 * k }}></i>
                    <p>{v.subjectName}</p>
                  </a>
                </Flex.Item>
              );
            }
            return "";
          })}

          <Flex.Item></Flex.Item>
        </Flex>
      </div>
    );
  }
}

// 定义 state 数据转换为 props 数据的函数
const mapStateToProps = (state) => {
  return {
    subject_data: state.subject_data,
  };
};

//事件写在 mapDispatchToProps 函数中
const mapDispatchToProps = (dispatch) => {
  return {
    init_subject_data(subList) {
      // 3. 调用 dispatch(action) ,将管理状态的方案传入当参数
      let action = {
        type: "init_subject_data",
        // 这里其实修改的是 props 中的 myNum
        value: subList,
      };
      dispatch(action); // 这个函数一执行会调用到 reduce
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
