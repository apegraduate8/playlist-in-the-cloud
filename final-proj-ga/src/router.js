import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Navbar from './components/Navbar';

export default (
  <BrowserRouter>
      <div className="App">
          <Navbar />
            <Route exact path='/' component={ App } />
            <Route exact path='/projects' component={ projectsIndex } />

      </div>
  </BrowserRouter>

  )
