import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { About, Home, Recipes } from "./views";
import { Recipe, Ingredients } from "./components";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="recipes/:id" element={<Recipe/>}/>
          <Route path="recipes" element={<Recipes/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
};

export default App;
