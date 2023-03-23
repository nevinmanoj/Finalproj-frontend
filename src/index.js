import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DropDown from './components/dropdown/dropdown';
import Apptest from './pages/chat/chat';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Apptest /> */}
      {/* <DropDown /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
