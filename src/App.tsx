import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout';
import Home from './Pages/Home'
import Swap from './Pages/Swap';
import RoadMap from './Pages/Roadmap';
import Lottery from './Pages/Lottery';
import Charity from './Pages/Charity';
import HowToBuy from './Pages/HowToBuy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="swap" element={<Swap />} />
          <Route path="roadmap" element={<RoadMap />} />
          <Route path="lottery" element={<Lottery />} />
          <Route path="charity" element={<Charity />} />
          <Route path="howtobuy" element={<HowToBuy />} />
          <Route path="*" element={"404"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
