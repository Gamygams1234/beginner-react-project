import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom"; // importing the router
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// we set every page up by importing it, now we neet to stop it from loading everytime

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
