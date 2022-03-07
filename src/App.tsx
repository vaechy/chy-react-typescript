import React from 'react';
import Header from './components/header';
import Home from '@/pages/home';
import About from '@/pages/about';

import { BrowserRouter as Router, HashRouter, Route, Link, NavLink } from 'react-router-dom';
export default function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <nav>
          <NavLink to="/home" style={{ marginRight: '28px' }} activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </nav>
        <div className="curtain">
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </>
  );
}
