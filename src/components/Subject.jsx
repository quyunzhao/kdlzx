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
        <Flex>
          {this.state.subject_data.map((v, k) => {
            if (k < 4) {
              return (
                <Flex.Item key={v.id}>
                  <a href="#/list">
                    <i style={{ backgroundPositionX: -50 * k }}></i>
                    <p>{v.subjectName}</p>
                  </a>
                </Flex.Item>
              );
            }
            return "";
          })}
          {/* <Flex.Item>
            <a href="#/list">
              <i></i>
              <p>Java EE</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -50 * 1 }}></i>
              <p>全栈UX设计</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -50 * 2 }}></i>
              <p>H5前端</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -50 * 3 }}></i>
              <p>Python</p>
            </a>
          </Flex.Item> */}
        </Flex>
        <Flex>
          {this.state.subject_data.map((v, k) => {
            if (k > 3) {
              return (
                <Flex.Item key={v.id}>
                  <a href="#/list">
                    <i style={{ backgroundPositionX: -50 * k }}></i>
                    <p>{v.subjectName}</p>
                  </a>
                </Flex.Item>
              );
            }
            return "";
          })}
          {/* <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -50 * 4 }}></i>
              <p>ios</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -50 * 5 }}></i>
              <p>大数据</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="#/list">
              <i style={{ backgroundPositionX: -50 * 6 }}></i>
              <p>c++</p>
            </a>
          </Flex.Item> */}
          <Flex.Item></Flex.Item>
        </Flex>
      </div>
    );
  }
}
