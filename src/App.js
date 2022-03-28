import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import SelectPage from "./components/selectPage/SelectPage";
import AboutPage from "./components/aboutPage/AboutPage";
import Characters from "./components/mainPage/components/characters/Characters";
import Locations from "./components/mainPage/components/locations/Locations";
import Episodes from "./components/mainPage/components/episodes/Episodes";
import FourZeroFour from "./components/fourzerofour/FourZeroFour";

function App() {
  return (
    <div className="app">
      <div className="appWrapper">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
