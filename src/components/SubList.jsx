import React, { Component } from "react";

import SubListItem from "./SubListItem";

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
    img: "hpic3289.jpg",
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

export default class SubList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub_list_data,
    };
  }

  render() {
    return (
      <div>
        <div className="sub-list">
          <div className="sub-list-header">相关资讯</div>
          {this.state.sub_list_data.map((val, index) => {
            return (
              <div key={index}>
                <SubListItem {...val} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
