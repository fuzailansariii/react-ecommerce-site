import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center w-[60%]">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 leading-relaxed">
        Welcome to our e-commerce platform! We are dedicated to providing you
        with the best online shopping experience, offering a wide range of
        high-quality products at affordable prices.
      </p>
      <p className="text-gray-700 mt-4 leading-relaxed">
        Our team, led by{" "}
        <span className="font-bold font-quicksand">Mohd Fuzail Ansari,</span> is
        passionate about delivering exceptional service to our customers.
        Whether you're looking for the latest fashion trends, electronics, home
        essentials, or anything in between, we've got you covered.
      </p>
      <p className="text-gray-700 mt-4 leading-relaxed">
        At our store, customer satisfaction is our top priority. We strive to
        ensure that every purchase meets your expectations, and we're always
        here to assist you with any questions or concerns you may have.
      </p>
    </div>
  );
};

export default About;
