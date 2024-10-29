'use client';
import React, { useState} from "react";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export const ContactUs = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Constructing FormData from the formData state


    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_USER_ID,
          template_params: {
            from_name: formData.from_name,
            from_email: formData.from_email,
            message: formData.message,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ from_name: "", from_email: "", message: "" });
      }
    } catch (error) {
      setStatus("Failed to send message.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <hr className="white"/>
      <div className="text-white mt-10">
        <span className="text-5xl font-semibold px-10">Contact Me</span>
        <div className="px-10 mb-10 mt-10 grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="border-r-2 pr-10 mt-14 mb-10">
            <span className="font-extralight text-3xl">
              Feel Free to reach me out for any opportunities
            </span>

            <div className="mt-5">
              <div className="flex">
                <FaEnvelope className="text-2xl mt-1 mb-10 text-white" />
                <span className="px-2 text-2xl">: atharvvt14@gmail.com</span>
              </div>
              <div className="mx-2">
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/atharvt14"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-3xl  text-pink-600 hover:text-pink-800 transition" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atharvvatiwari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-3xl  text-blue-700 hover:text-blue-900 transition" />
                  </a>
                  <a href="mailto:atharvvt14@gmail.com">
                    <FaEnvelope className="text-3xl  text-white hover:text-gray-600 transition" />
                  </a>
                  <a href="https://github.com/CodifyAT">
                    <FaGithub className="text-3xl  hover:text-gray-600 transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="px-10">
            <form
              onSubmit={sendEmail}
              className="bg-black border p-5 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4 text-white">
                Send Me a Message
              </h2>
              {status && (
                <p
                  className={`mb-4 text-center ${
                    status.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}

              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500 border-gray-300"
                />
                <label className="block mb-2 text-sm font-semibold text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500 border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-semibold text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mb-6 border rounded-lg h-32 focus:outline-none  text-black focus:ring-2 focus:ring-blue-500 border-gray-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 rounded-md bg-black border text-white font-bold hover:bg-white hover:text-black transition-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
