import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import GoogleMaps from "./components/Map";
import SearchBar from "./components/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMap from "./pages/MainMap";
import { Stack } from "@mui/material";
import Company from "./pages/Company";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<MainMap />} />
        <Route path="/company/:company_name" element={<Company />} />
        <Route path="*" element={<Stack alignItems="center">404 </Stack>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
