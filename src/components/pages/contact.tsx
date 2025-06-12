"use client";

import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted form data:", form);
    
    alert("Thank you for reaching out. We will get back to you shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 py-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Visit Our Office</h3>
            <p>Musat Filling Station, Okeresi Ede, Osun State, Nigeria.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
            <p>+234 703 585 3137</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p>support@topstakacademy.com</p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
                
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-600 font-semibold">Twitter</a>
              <a href="#" className="text-pink-500 hover:text-pink-700 font-semibold">Instagram</a>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Google Map Placeholder */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
        <div className="w-full h-72 bg-gray-200 flex items-center justify-center rounded-lg">
          {/* Replace with actual Google Map Embed */}
          <p className="text-gray-500">Google Map Integration</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
