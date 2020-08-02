import React, { Component } from 'react'
import store from '../store';
import { addAction } from '../store/actionCreators';

export default class Home extends Component {
    state = {
        num: store.getState().num
    };
    add = num => {
        store.dispatch(addAction(num));
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                num: store.getState().num
            });
        });
    }
    componentWillUnmount() {
        store.unsubscribe(this.unsubscribe);
    }
    render() {
        return (
            <div>
                Home
                <p>{this.state.num}</p>
                <button onClick={() => this.add(1)}>加1</button>
                <button onClick={() => this.add(3)}>加3</button>
            </div>
        )
    }
}
