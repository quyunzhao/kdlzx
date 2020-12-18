import React, { Component } from "react";
import { Flex, Tabs, List } from "antd-mobile";

import "../assets/styles/homePage.less";

import Img from "../components/Img";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Subject from "../components/Subject";

const sub_list_data = [
  {
    img: "1.gif",
    title: "基础教程",
    des: "Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。",
  },
  {
    img: "2.gif",
    title: "发展历史",
    des:
      "Python 是由 Guido van Rossum 在八十年代末和九十年代初，在荷兰国家数学和计算机科学研究所设计出来的。",
  },
  {
    img: "3.gif",
    title: "环境搭建",
    des: "本章节我们将向大家介绍如何在本地搭建Python开发环境。",
  },
  {
    img: "4.gif",
    title: "中文编码",
    des:
      "前面章节中我们已经学会了如何用 Python 输出 Hello, World!，英文没有问题，但是如果你输出中文字符 就有可能会碰到中文编码问题。",
  },
  {
    img: "5.gif",
    title: "基础语法",
    des:
      "Python 语言与 Perl，C 和 Java 等语言有许多相似之处。但是，也存在一些差异。",
  },
];

const tabs = [{ title: "产品" }, { title: "出行" }, { title: "深度" }];

const Item = List.Item;
export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub_list_data,
    };
  }

  render() {
    return (
      <div className="home-page">
        {/* 头部搜索 */}
        <Header></Header>

        {/* 轮播图 */}
        <Banner></Banner>

        {/* 学科导航 */}
        <Subject></Subject>

        {/* 小列表 */}
        <div className="sub-list">
          <div className="sub-list-header">相关资讯</div>
          {this.state.sub_list_data.map((val, index) => {
            return (
              <div className="sub-list-item" key={index}>
                <Flex>
                  <Flex.Item className="sub-list-item-left">
                    <Img src={val.img} height={80}></Img>
                  </Flex.Item>
                  <Flex.Item>
                    <h3>{val.title}</h3>
                    <p>{val.des}</p>
                  </Flex.Item>
                </Flex>
              </div>
            );
          })}
        </div>

        {/* Tab 栏 */}
        <div className="tab">
          <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <div>
              <Item arrow="horizontal" onClick={() => {}}>
                一般由主要信息、主要操作、次要信息、次要操作组成。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                一般由主要信息、主要操作、次要信息、次要操作组成。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                一般由主要信息、主要操作、次要信息、次要操作组成。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                一般由主要信息、主要操作、次要信息、次要操作组成。
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                一般由主要信息、主要操作、次要信息、次要操作组成。
              </Item>
            </div>
            <div>Content of second tab</div>
            <div>Content of third tab</div>
          </Tabs>
        </div>

        {/* 小列表 */}
        {/* <div className="list">
          <List>
            <Item arrow="horizontal" onClick={() => {}}>
              Title
            </Item>
          </List>
        </div> */}
      </div>
    );
  }
}

export default HomePage;
