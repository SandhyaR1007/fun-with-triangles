import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Hypotenuse from "./components/Hypotenuse";
import IsTriangle from "./components/IsTriangle";
import Area from "./components/Area";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/hypotenuse" element={<Hypotenuse />} />
        <Route path="/isTriangle" element={<IsTriangle />} />
        <Route path="/area" element={<Area />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
