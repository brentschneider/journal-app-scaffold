import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    signIn = () => {
        alert('Implement sign-in');
    }

    signOut = () => {
        alert('Implement sign-out');
    }

    render() {
        return (
            <ul className="navigation-bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                {!this.state.isLoggedIn && <li><a href="#signin" onClick={this.signIn}>Sign In</a></li>}
                {this.state.isLoggedIn && <li><a href="#signout" onClick={this.signOut}>Sign Out</a></li>}
            </ul>
        );
    }
}

export default NavigationBar;