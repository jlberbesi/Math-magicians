import React from 'react';
import './QuotePage.css';
import QuoteDisplay from './components/QuoteDisplay';

const QuotePage = () => (
  <div className="page">
    <h2>Fun quote of the Day!</h2>
    <QuoteDisplay />
  </div>
);

export default QuotePage;
