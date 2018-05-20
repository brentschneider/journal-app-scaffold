import React, { Component } from 'react';
import './App.css';

import HomePage from './HomePage/HomePage';
import JournalPage from './JournalPage/JournalPage';
import NavigationBar from './NavigationBar/NavigationBar';


import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavigationBar />
            <Route exact path="/" component={HomePage} />
            <Route path="/journal" component={JournalPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
