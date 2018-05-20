import React, { Component } from 'react';

export default class JournalEntry extends Component {
    render() {
        return (
            <p>{this.props.entry}</p>
        );
    }
}