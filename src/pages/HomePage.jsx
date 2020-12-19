import React, { Component } from "react";
import { Flex, Tabs, List } from "antd-mobile";

import "../assets/styles/homePage.less";
import "../assets/fonts/iconfont.css";

import Img from "../components/Img";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Subject from "../components/Subject";
import SubList from "../components/SubList";

const tabs = [{ title: "产品" }, { title: "出行" }, { title: "深度" }];

const Item = List.Item;

export class HomePage extends Component {
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
        <SubList></SubList>

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

        {/* 首页尾部完成 */}
        <Header isFooter></Header>
        <div className="footer">
          <p>Copyright © ICP 证浙 BX-X-100000</p>
          <p>XXX金融服务集团</p>
          <p>关于</p>
          <p>地址：北京市海淀区XXX大厦XXX座XXX层14012号</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
