import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Views from './Views';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    );
  }
}

export default App;
