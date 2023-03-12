import React from "react";
import Explore from "./Explore/Explore";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore/>}/>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
