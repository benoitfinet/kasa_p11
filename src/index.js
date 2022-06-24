import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
      <Header />
          <Route exact path="/">
              <App />
          </Route>
          <Route>
              <Error />
          </Route>
  </Router>
</React.StrictMode>,
);
