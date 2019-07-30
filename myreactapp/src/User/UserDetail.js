import React, { Component } from 'react';

export class UserDetail extends Component {
    constructor() {
        super();

        this.state = {
            city: "Salford"
        }
    }

    updateCity = e => {
        e.preventDefault();
        this.setState({
            city: document.getElementById("input").value
        })
    }

    render() {
        return (
            <div>
                <p>First Name: {this.props.userData.firstName}</p>
                <p>Last Name: {this.props.userData.lastName}</p>
                <p>Date of Birth: {this.props.userData.dob}</p>
                <p>City: {this.state.city}</p>

                <form>
                    <label>Change city: </label>
                    <input id="input" type="text"></input>
                    <button onClick={this.updateCity}>Submit</button>
                </form>

            </div>

        )
    }
}