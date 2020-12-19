import React, { Component } from "react";

import { ListView } from "antd-mobile";

const data = [
  {
    img: "dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "hfVtzEhPzTUewPm.png",
    title: "McDonald's invites you",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "XmwCzSeJiqpkuMB.png",
    title: "Eat the week",
    des: "不是所有的兼职汪都需要风吹日晒",
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

  renderRow() {
    return <p>lll</p>;
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
