import React, { Component } from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faCalendarAlt, faUserAlt, faHiking } from '@fortawesome/free-solid-svg-icons';

export class UserDetail extends Component {
    constructor() {
        super();

        this.state = {
            city: "Salford",
            name: "John Doe",
            age: 100,
            dob: "01/01/1990"
        }
    }

    updateCity = e => {
        e.preventDefault();
        this.setState({
            city: document.getElementById("city").value
        })
    }

    updateName = e => {
        e.preventDefault();
        this.setState({
            name: document.getElementById("name").value
        })
    }

    updateAge = e => {
        e.preventDefault();
        this.setState({
            age: document.getElementById("age").value
        })
    }

    updateDob = e => {
        e.preventDefault();
        this.setState({
            dob: document.getElementById("dob").value
        })
    }

    render() {
        return (
            <div className="container">
                <p><FontAwesomeIcon icon={faUserAlt} /> {this.state.name}</p>
                <p><FontAwesomeIcon icon={faCalendarAlt} /> {this.state.dob}</p>
                <p><FontAwesomeIcon icon={faHiking} /> {this.state.age}</p>
                <p><FontAwesomeIcon icon={faCity} /> {this.state.city}</p>

                <InputGroup>
                    <Input id="name" type="text" placeholder="Enter your name"></Input>
                    <InputGroupAddon addonType="append">
                        <Button onClick={this.updateName} >Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">D.O.B</InputGroupAddon>
                    <Input id="dob" type="text" placeholder="dd/mm/yyyy"></Input>
                    <InputGroupAddon addonType="append">
                        <Button onClick={this.updateAge} >Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <Input id="age" type="number" placeholder="Enter your age"></Input>
                    <InputGroupAddon addonType="append">
                        <Button onClick={this.updateDob} >Submit</Button>
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <Input id="city" type="text" placeholder="Enter your city"></Input>
                    <InputGroupAddon addonType="append">
                        <Button onClick={this.updateCity} >Submit</Button>
                    </InputGroupAddon>
                </InputGroup>

            </div>

        )
    }
}