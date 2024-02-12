import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-quicksand font-bold mb-6">
        Order Successfully Placed
      </h2>
      <p className="text-lg font-quicksand">
        Thank you for your order! Your order has been successfully placed.
      </p>
      <p className="text-lg font-quicksand mt-4">
        You will receive a confirmation email shortly.
      </p>
    </div>
  );
};

export default Success;
