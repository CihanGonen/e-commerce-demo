import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Urunler from "./pages/Urunler";
import Navbar from "./components/Navbar";
import CesitUrun from "./pages/CesitUrun";
import UrunDetay from "./pages/UrunDetay";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/urunler/:urun" element={<CesitUrun />} />
          <Route path="/urunler/:urun/:id" element={<UrunDetay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
