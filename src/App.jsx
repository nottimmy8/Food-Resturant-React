import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";

function App() {
  return (
    <div className=" bg-white dark:bg-gray-800 ">
      <Navbar />
      <Hero />
      <Service />
    </div>
  );
}

export default App;
