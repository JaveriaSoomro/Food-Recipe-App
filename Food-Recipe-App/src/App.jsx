import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Favorites from "./Favorites";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes/:id" element={<Details />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
