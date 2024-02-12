import React, { useState } from "react";

const ContactUs = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(contactFormData);
    setContactFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-quicksand font-bold mb-6">Contact Us</h2>
      <form className="w-full max-w-lg" onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            required
            value={contactFormData.name}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            id="email"
            required
            value={contactFormData.email}
            onChange={changeHandler}
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Your Message"
            rows="4"
            id="message"
            name="message"
            value={contactFormData.message}
            onChange={changeHandler}
            required
            autoComplete="off"
          />
        </div>
        <button
          className="mt-6 px-6 py-3 text-base font-semibold text-white bg-green-900 rounded-md hover:bg-green-600 focus:outline-none focus:bg-yellow-600"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
