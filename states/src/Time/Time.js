import React, { Component } from 'react';

export class Time extends Component {

    constructor() {
        super();

        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    buttonClick = e => {
        e.preventDefault();
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div>
                <h1> {this.state.time} </h1>
                <button onClick={this.buttonClick}>Click Me!</button>
            </div>

        );


    }
}