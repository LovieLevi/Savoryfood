import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NavBar} from "src/components/NavBar";
import {Home} from "./views/Home";
import {Profile} from "./views/Profile";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
