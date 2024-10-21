import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Ticket from './pages/Tickets.jsx';
import About from './pages/About.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/buy-ticket" element={<Ticket/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
  )
}