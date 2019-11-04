import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Navbar from './components/Navbar';

export default (
  <BrowserRouter>
      <div className="App">
          <Navbar />
          <Logo />
          <Route exact path='/' component={ Landing } />
          <Route exact path='/playlist' component={ Music } />
      </div>
  </BrowserRouter>
)
