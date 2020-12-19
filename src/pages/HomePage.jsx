import React, { Component } from "react";
import { Flex, Tabs, List } from "antd-mobile";

import "../assets/styles/homePage.less";
import "../assets/fonts/iconfont.css";

import Img from "../components/Img";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Subject from "../components/Subject";

const sub_list_data = [
  {
    img: "bpic22021_s.jpg",
    title: "基础教程",
    des: "Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。",
  },
  {
    img: "apic29680.jpg",
    title: "发展历史",
    des:
      "Python 是由 Guido van Rossum 在八十年代末和九十年代初，在荷兰国家数学和计算机科学研究所设计出来的。",
  },
  {
    img: "bpic22018.jpg",
    title: "环境搭建",
    des: "本章节我们将向大家介绍如何在本地搭建Python开发环境。",
  },
  {
    img: "hpic3289.jpg",
    title: "中文编码",
    des:
      "前面章节中我们已经学会了如何用 Python 输出 Hello, World!，英文没有问题，但是如果你输出中文字符 就有可能会碰到中文编码问题。",
  },
  {
    img: "bpic22018.jpg",
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
            {/* tab 1 */}
            <div>
              <Flex className="tab-flex">
                <Flex.Item className="tab-left">
                  <Img src={"apic29680.jpg"} height={80}></Img>
                </Flex.Item>
                <Flex.Item className="tab-right">
                  <h3>
                    单个连续模块垂直排列，显示当前的内容、状态和可进行的操作
                  </h3>
                  <p>
                    <span>
                      <i className="iconfont icon-shouji"></i>
                      2小时前
                    </span>
                    <span style={{ float: "right" }}>
                      <i className="iconfont icon-Lock_icon"></i>
                      63
                    </span>
                  </p>
                </Flex.Item>
              </Flex>
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

            {/* tab 2 */}
            <div>
              <Flex className="tab-flex">
                <Flex.Item className="tab-left">
                  <Img src={"bpic22018.jpg"} height={80}></Img>
                </Flex.Item>
                <Flex.Item className="tab-right">
                  <h3>
                    Less 是一门 CSS 预处理语言，它扩展了 CSS
                    语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
                  </h3>
                  <p>
                    <span>
                      <i className="iconfont icon-shouji"></i>
                      2小时前
                    </span>
                    <span style={{ float: "right" }}>
                      <i className="iconfont icon-Lock_icon"></i>
                      63
                    </span>
                  </p>
                </Flex.Item>
              </Flex>
              <Item arrow="horizontal" onClick={() => {}}>
                如果我们希望在其它规则集中使用这些属性呢？没问题，我们只需像下面这样输入所需属性的类（class）名称即可，
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                如果我们希望在其它规则集中使用这些属性呢？没问题，我们只需像下面这样输入所需属性的类（class）名称即可，
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                如果我们希望在其它规则集中使用这些属性呢？没问题，我们只需像下面这样输入所需属性的类（class）名称即可，
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                如果我们希望在其它规则集中使用这些属性呢？没问题，我们只需像下面这样输入所需属性的类（class）名称即可，
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                如果我们希望在其它规则集中使用这些属性呢？没问题，我们只需像下面这样输入所需属性的类（class）名称即可，
              </Item>
            </div>

            {/* tab 3 */}
            <div>
              <Flex className="tab-flex">
                <Flex.Item className="tab-left">
                  <Img src={"bpic22021_s.jpg"} height={80}></Img>
                </Flex.Item>
                <Flex.Item className="tab-right">
                  <h3>
                    混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法。
                  </h3>
                  <p>
                    <span>
                      <i className="iconfont icon-shouji"></i>
                      2小时前
                    </span>
                    <span style={{ float: "right" }}>
                      <i className="iconfont icon-Lock_icon"></i>
                      63
                    </span>
                  </p>
                </Flex.Item>
              </Flex>
              <Item arrow="horizontal" onClick={() => {}}>
                Get the latest Less.js source code by downloading it directly
                from GitHub.
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                Get the latest Less.js source code by downloading it directly
                from GitHub.
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                Get the latest Less.js source code by downloading it directly
                from GitHub.
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                Get the latest Less.js source code by downloading it directly
                from GitHub.
              </Item>
              <Item arrow="horizontal" onClick={() => {}}>
                Get the latest Less.js source code by downloading it directly
                from GitHub.
              </Item>
            </div>
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
