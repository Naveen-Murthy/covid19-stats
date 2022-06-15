import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Developer from "./pages/Developer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
        <main className="main__section">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="developer" element={<Developer/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
