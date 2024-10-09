import React from "react";
import { asset } from "../assets/assets";


const ContactUs = () => {
  return (


    <div className="bg-gray-100 ">
      {/* Header Section */}
      <div className="text-center mb-[50px] text-black mb-12 text-4xl font-bold mb-2 ">
        <div className=" inset-0   bg-cover pt-[100px] pb-[50px] " style={{ backgroundImage: `url(${asset.bg})` }} >
          <h1 className="text-black">Contact Us</h1>
          <p className="text-black">Home / Contact Us</p>
        </div>
      </div>
      {/* Contact Info Section */}
      <div className="container mx-auto px-4  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 " >

          {/* Phone Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4 ">
              <div className="bg-black p-3 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M9 3v2m0 16v2M5 3v2M19 3v2M4 21h16v-6a9 9 0 00-9-9 9 9 0 00-9 9v6z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold ml-4">Phone</h2>
            </div>
            <p className="text-gray-600">Toll-Free: 0803 - 080 - 3081</p>
            <p className="text-gray-600">Fax: 0803 - 080 - 3082</p>
          </div>

          {/* Email Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-black p-3 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V8m0 0l4 4m-4-4l-4 4m4-4v4m0 2H7a2 2 0 01-2-2v-4a2 2 0 012-2h7m5 6h-3m-5-4l4 4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold ml-4">Email</h2>
            </div>
            <p className="text-gray-600">mail@example.com</p>
            <p className="text-gray-600">support@example.com</p>
          </div>

          {/* Address Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-black p-3 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V8m0 0l4 4m-4-4l-4 4m4-4v4m0 2H7a2 2 0 01-2-2v-4a2 2 0 012-2h7m5 6h-3m-5-4l4 4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold ml-4">Address</h2>
            </div>
            <p className="text-gray-600">No: 58 A, East Madison Street,</p>
            <p className="text-gray-600">Baltimore, MD, USA 4508</p>
          </div>

        </div>
      </div>


      {/* Contact Form and Map Section */}
      <div className="container mx-auto px-[10%] py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="form">
          <h1 className="text-3xl font-semibold">Get In Touch</h1>
          <input
            className="p-5 my-5 w-full border-2 border-zinc-200"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="p-5 my-5 w-full border-2 border-zinc-200"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="p-5 my-5 w-full border-2 border-zinc-200"
            placeholder="Your Message"
          ></textarea>
          <button className="bg-black text-white p-3 mt-5">Submit</button>
        </div>

        <div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13602.888421979596!2d74.3515196!3d31.5317916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904273cd128ab%3A0x2d29bfce02cc29e5!2sFRAG%20Games!5e0!3m2!1sen!2s!4v1722881162628!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
