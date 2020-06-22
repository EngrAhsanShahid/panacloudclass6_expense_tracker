import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <div className="App">
        <TransactionProvider>
          <Child/>
        </TransactionProvider>
    </div>
  );
}

export default App;
