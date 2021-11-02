import React from 'react';
// Be sure to uncomment the TableRow component import before using a TableRow
// import TableRow from './components/TableRow.js';
import TableHeader from './components/TableHeader.js';
import Navbar from './components/Navbar.js';
// Be sure to uncomment the line importing the data before using it!
// import data from './knicks-data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TableHeader/>
    </div>
  );
}

export default App;
