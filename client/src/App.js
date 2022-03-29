import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Program from "./pages/Program";

const App = () => {
  return (
    <div className=" bg-gray-800 overflow-y-auto overflow-x-hidden px-4 py-4 md:px-8">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />
            <Route
              path="programs/:programId"
              element={
                <>
                  <Navbar />
                  <Program />
                </>
              }
            />
            <Route
              path="courses/:courseId"
              element={
                <>
                  <Navbar />
                  <Course />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
