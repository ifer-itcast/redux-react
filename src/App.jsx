import React, { Component } from 'react'

import Home from './home';
import Profile from './profile';

export default class App extends Component {
    render() {

        return (
            <div>
                <Home/>
                <hr/>
                <Profile/>
            </div>
        )
    }
}
