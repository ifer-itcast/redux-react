import React, { Component } from 'react'
import store from '../store';
import { subAction } from '../store/actionCreators';

export default class Profile extends Component {
    sub = num => {
        store.dispatch(subAction(num));
    }
    render() {
        return (
            <div>
                Home
                <p>{store.getState().num}</p>
                <button onClick={() => this.sub(1)}>减1</button>
                <button onClick={() => this.sub(3)}>减3</button>
            </div>
        )
    }
}
