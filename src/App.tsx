import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout';
import Home from './Pages/Home'
import Swap from './Pages/Swap';
import RoadMap from './Pages/Roadmap';
import Candlestick from './Pages/Candlestick'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="swap" element={<Swap />} />
          <Route path="roadmap" element={<RoadMap />} />
          <Route path='candle' element={<Candlestick />} />
          <Route path="*" element={"404"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
