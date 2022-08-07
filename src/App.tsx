import React from 'react';
import Header from './components/header';
import Home from '@/pages/home';
import About from '@/pages/about';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link, NavLink, useLocation } from 'react-router-dom';

export default function App() {
  let local = useLocation();
  return (
    <div className="app">
      <Header />
      <nav>
        <NavLink to="/home" style={{ marginRight: '28px' }} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </nav>

      <div className="curtain">
        {local.pathname === '/' && <div className="app-content">This is Typescript React Project template</div>}
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </div>
  );
}
