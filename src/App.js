import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import { hostels } from "./data/data";
import Hostels from "./components/Hostels";
import Hostel from "./components/Hostel";
import Cafe from "./components/Cafe";
import Search from "./components/Search";
import Review from "./components/Review";
import Rate from "./components/Rate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />

          <Route path="hostels" element={<Hostels hostels={hostels} />}>
            <Route path=":id" element={<Hostel hostels={hostels} />} />

            <Route path="cafe" element={<Cafe hostelList={hostels} />}>
              <Route path=":term" element={<Cafe hostelList={hostels} />} />
            </Route>

            <Route path="search" element={<Search details={hostels} />} />

            <Route path="rate" element={<Rate details={hostels} />}>
              <Route path=":id" element={<Rate details={hostels} />}>
                <Route path="rating" element={<Rate details={hostels} />} />
              </Route>
            </Route>

            <Route path="review" element={<Review details={hostels} />} >
              <Route path=":id" element={<Review details={hostels} />} />
            </Route>
          </Route>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
