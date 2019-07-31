import React, { Component } from 'react';
import { UserDetail } from './UserDetail'

export class User extends Component {

    render() {
        return (
            <div>
                <h1>User</h1>
                <UserDetail />
            </div>

        );
    }
}