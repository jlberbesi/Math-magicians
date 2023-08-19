import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QuoteDisplay';

function App() {
  return (
    <div className="App">
      <h1>Math Magicians Calculator by José Berbesi</h1>
      <Calculator />
      <QuoteDisplay />
    </div>
  );
}

export default App;
