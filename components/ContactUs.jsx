import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("", "template_id", form.current, "publicKey").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-6/12"
      ref={form}
      onSubmit={sendEmail}
    >
      <label>Name</label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        name="user_name"
      />
      <label>Email</label>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="email"
        name="user_email"
      />
      <label>Message</label>
      <textarea
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        name="message"
      />
      <input
        className="border-4 border-indigo-500/75 rounded-lg px-8 cursor-pointer mt-6"
        type="submit"
        value="Send"
      />
    </form>
  );
};
