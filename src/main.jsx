import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import Clippings from './screens/Clippings/Clippings';
import { MyClippingsContextProvider } from "./hooks/myClippings";

import './main.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar />
    <MyClippingsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clippings" element={<Clippings />} />
      </Routes>
    </MyClippingsContextProvider>
  </BrowserRouter>
);