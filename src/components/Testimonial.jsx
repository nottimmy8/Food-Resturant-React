import React from "react";

function Testimonial() {
  return (
    <div className=" py-10 ">
      <div className="container">
        {/* Header section */}
        <div className=" text-center mb-20 max-w-[400px] mx-auto ">
          <p className=" text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className=" text-3xl font-bold ">Testimonial</h1>
          <p className=" text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ab
            explicabo. Numquam blanditiis totam officiis nemo nihil maxime
            voluptates praesentium accusamus architecto incidunt. Cumque
            delectus enim reiciendis, placeat omnis ipsa.
          </p>
        </div>
        {/* testimonial section */}
        <div className=" grid grid-cols-1 max-w-[600px] mx-auto gap-6">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
