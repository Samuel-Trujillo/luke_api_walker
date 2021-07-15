import React, { useState } from 'react';
import {Router, navigate} from '@reach/router';
import DataPull from './components/DataPull';
import Input from './components/Form';
import SearchError from './components/SearchError';
import './App.css';

function App() {
  return (
    <div className="App">
      <Input/>
      <Router>
        <DataPull path ="/:pull/:id"/>
        <SearchError path ="/404"/>
      </Router>
    </div>
  );

}


export default App;
