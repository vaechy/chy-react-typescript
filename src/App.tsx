import React from 'react';
import Header from './components/header';
import RouterIndex from '@/router';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Link, Outlet, NavLink, useLocation } from 'react-router-dom';

export default function App() {
  let local = useLocation();
  return (
    <div className="app">
      <Header />
      <nav>
        <NavLink to="/home" style={{ marginRight: '28px' }} className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
