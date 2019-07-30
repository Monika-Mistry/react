import React, { Component } from 'react';
import { UserDetail } from './UserDetail'

export class User extends Component {
    userData = {
        firstName: "John",
        lastName: "Doe",
        dob: "01/01/1990",
    }
    render() {
        return (
            <div>
                <h1>User</h1>
                <UserDetail userData={this.userData} />
            </div>

        );
    }
}