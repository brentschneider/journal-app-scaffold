import React, { Component } from 'react';
import JournalEntry from './JournalEntry';
import './JournalPage.css';

import firebase from 'firebase';
const auth = firebase.auth();
const database = firebase.database();

class JournalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalEntries: {},
            entryInput: ''
        }
    }

    componentDidMount() {
        if (!auth.currentUser) {
            alert('Must be logged in to view journal');
            return this.props.history.push('/');
        }

        auth.onAuthStateChanged((user) => {
            if (!user) {
                this.props.history.push('/');
            }
        });

        database.ref(`users/${auth.currentUser.uid}`)
            .on('value', (snapshot) => {
                this.setState(() => {
                    return {
                        journalEntries: snapshot.val() || {}
                    };
                });
            })
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

        database.ref(`users/${auth.currentUser.uid}`)
            .push(this.state.entryInput);
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