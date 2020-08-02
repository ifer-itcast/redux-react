import React, { Component } from 'react'
import store from '../store';
import { addAction } from '../store/actionCreators';

export default class Home extends Component {
    // 注意 store 变化时 state 这里并不会执行了
    // state = {
    //     num: store.getState().num
    // };
    add = num => {
        store.dispatch(addAction(num));
    }
    render() {
        return (
            <div>
                Home
                {/* 所以这里取数据时就不要从 state 里取了 */}
                <p>{store.getState().num}</p>
                <button onClick={() => this.add(1)}>加1</button>
                <button onClick={() => this.add(3)}>加3</button>
            </div>
        )
    }
}
