import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Journal App</h1>
                <p>Welcome to the journal app</p>
                <Link to="/journal">My journal</Link>
            </div>
        );
    }
}

export default HomePage;