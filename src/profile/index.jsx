import React, { Component } from 'react'
import store from '../store';
import { subAction } from '../store/actionCreators';

export default class Profile extends Component {
    state = {
        num: store.getState().num
    };
    sub = num => {
        store.dispatch(subAction(num));
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
                <button onClick={() => this.sub(1)}>减1</button>
                <button onClick={() => this.sub(3)}>减3</button>
            </div>
        )
    }
}
