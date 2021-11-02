import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ResultsContextProvider } from './contexts/ResultsContext';


ReactDOM.render(
  <React.StrictMode>
    <ResultsContextProvider>
      <App />
    </ResultsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


