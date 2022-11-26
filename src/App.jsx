import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Play } from "./components/Play";
import { Complete } from "./components/Complete";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/play" exact={true} element={<Play />} />
        <Route path="/complete" exact={true} element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
