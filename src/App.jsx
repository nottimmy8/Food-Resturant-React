import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Banner from "./components/Banner";
import AppStore from "./components/AppStore";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className=" bg-white dark:bg-gray-800 ">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <AppStore />
      <Testimonial />
    </div>
  );
}

export default App;
