import React, { Component } from "react";

import { ListView } from "antd-mobile";

import SubListItem from "./SubListItem";

const data = [
  {
    img: "dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "适用于显示同类的长列表数据类型，对渲染性能有一定的优化效果。",
  },
  {
    img: "hfVtzEhPzTUewPm.png",
    title: "renderSectionHeader",
    des: "如果提供了此函数，会为每个小节(section)渲染一个标题",
  },
  {
    img: "XmwCzSeJiqpkuMB.png",
    title: "horizontal",
    des:
      "当此属性为true的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列",
  },
];

export default class MyListView extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2, // 判断数据更新的依据
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    //模拟 Ajax 请求
    setTimeout(() => {
      // this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        isLoading: false,
      });
    }, 600);
  }

  renderRow(val) {
    return <SubListItem {...val} />;
  }

  render() {
    return (
      <div>
        <ListView
          dataSource={this.state.dataSource}
          // renderHeader={() => <span>header</span>}

          // renderFooter={() => (
          //   <div style={{ padding: 30, textAlign: "center" }}>
          //     {this.state.isLoading ? "Loading..." : "Loaded"}
          //   </div>
          // )}
          renderRow={this.renderRow}
          // renderSeparator={separator}
          className="am-list"
          // pageSize={4}
          useBodyScroll
          // onScroll={() => {
          //   console.log("scroll");
          // }}
          // scrollRenderAheadDistance={500}
          // onEndReached={this.onEndReached}
          // onEndReachedThreshold={10}
        />
      </div>
    );
  }
}
