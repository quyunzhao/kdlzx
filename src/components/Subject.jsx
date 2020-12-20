import React, { Component } from "react";

import { Flex } from "antd-mobile/dist/antd-mobile.min";

import "../assets/styles/subject.less";

import axios from "axios";

export default class Subject extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      subject_data: [],
    };
  }

  componentDidMount() {
    // 请求数据
    axios.get("/server/subject.json").then((response) => {
      const subList = response.data;
      console.log(subList);
      this.setState({
        subject_data: subList,
      });
    });
  }

  render() {
    return (
      <div className="subject">
        {/* 第一行 */}
        <Flex>
          {this.state.subject_data.map((v, k) => {
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
          {this.state.subject_data.map((v, k) => {
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
