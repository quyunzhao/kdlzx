import React, { Component } from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";

const reducer = (state, action) => {
  console.log("执行了 reducer函数");
  console.log("state和action---" + state, action);
  // 7.回到 reducer 函数，浅拷贝 action 对象到 newState，并返回
  // 此时只是 reducer 中的参数 state 发生了变化，而视图组件中的 state 没有改变，第八步 将处理组件中的 state
  if (action.type === "up") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.num1 = action.value;
    return newState;
  }

  // 1. 定义初始值
  return {
    num1: 20,
  };
};

// 创建一个仓库，把仓库管理员添进来管理这个仓库
// 2. 创建 store 仓库
const store = createStore(reducer);

export default class App extends Component {
  constructor(props) {
    super(props);

    //
    console.log("constructor中--" + store.getState());

    // 3. 在 constructor 中获取初始 state 值
    this.state = store.getState();
    this.changeNumUp = this.changeNumUp.bind(this);

    // 8. store订阅， 一旦 store 数据发生改变，则执行 storeChange 函数里面的代码
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }

  render() {
    return (
      <div>
        {/* 4. 书写组件，填入数据 */}
        <p>{this.state.num1}</p>

        {/* 5. 业务： 点击让 num1 自增 */}
        <button onClick={this.changeNumUp}>增加</button>
      </div>
    );
  }

  //
  changeNumUp(e) {
    // 6. 改变数据的时候。需要调用 store 的 dispatch 方法，把新的值作为放在对象中传进去
    // 每次调用 dispatch ，会在内部调用 图书管理员函数 reducer
    const action = {
      type: "up",
      value: this.state.num1 + 1,
    };
    store.dispatch(action);
  }

  storeChange(e) {
    this.setState(store.getState());
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
