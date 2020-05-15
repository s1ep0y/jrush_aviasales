import React from 'react';
import '../styles/App.scss';
import '@csstools/normalize.css';
import Filter from './Filter';
import Output from './Output';

function App() {
  return (
    <div className="App">
      <Filter />
      <Output />
      <p>some app</p>
    </div>
  );
}

export default App;


