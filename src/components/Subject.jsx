import React, { Component } from "react";

import { Flex } from "antd-mobile";

import "../assets/styles/subject.less";

export default class Subject extends Component {
  render() {
    return (
      <div className="subject">
        <Flex>
          <Flex.Item>
            <a href="###">
              <i></i>
              <p>Java EE</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="###">
              <i style={{ backgroundPositionX: -50 * 1 }}></i>
              <p>全栈UX设计</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="###">
              <i style={{ backgroundPositionX: -50 * 2 }}></i>
              <p>H5前端</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="###">
              <i style={{ backgroundPositionX: -50 * 3 }}></i>
              <p>Python</p>
            </a>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <a href="###">
              <i style={{ backgroundPositionX: -50 * 4 }}></i>
              <p>ios</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="###">
              <i style={{ backgroundPositionX: -50 * 5 }}></i>
              <p>大数据</p>
            </a>
          </Flex.Item>
          <Flex.Item>
            <a href="###">
              <i style={{ backgroundPositionX: -50 * 6 }}></i>
              <p>c++</p>
            </a>
          </Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>
      </div>
    );
  }
}
