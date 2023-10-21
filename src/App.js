import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
