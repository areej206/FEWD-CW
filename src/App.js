import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import { hostels } from "./data/data";
import Hostels from "./components/Hostels";
import Hostel from "./components/Hostel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="hostels" element={<Hostels hostels={hostels} />}>
            <Route path=":id" element={<Hostel hostels={hostels} />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
