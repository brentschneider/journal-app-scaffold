import React, { Component } from 'react';
import JournalEntry from './JournalEntry';
import './JournalPage.css';

class JournalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalEntries: {},
            entryInput: ''
        }
    }

    onInputChange = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        this.setState(() => {
            return {
                entryInput: newValue
            };
        })
    }

    addEntry = (e) => {
        e.preventDefault();
        alert('Implement addEntry');
        this.setState(() => {
            return {
                entryInput: ''
            };
        })
    }

    render() {
        return (
            <div>
                <h1>My Journal</h1>
                {Object.keys(this.state.journalEntries).map((key) => {
                    return <JournalEntry key={key} entry={this.state.journalEntries[key]} />;
                })}
                <form className="journal-form" onSubmit={this.addEntry}>
                    <textarea onChange={this.onInputChange} value={this.state.entryInput} />
                    <button className="journal-form__button" type="submit">Add Entry</button>
                </form>
            </div>
        );
    }
}

export default JournalPage;