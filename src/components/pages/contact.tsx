"use client";

import { useToast } from "hooks/toast-hook";
import { supabaseClient } from "lib/supa-base-client";
import { useState } from "react";

const facebookLink = "https://web.facebook.com/profile.php?id=61577408601864";
const instagram = "https://www.instagram.com/thetopstacks/";
const twitter = "https://x.com/TopstackAcademy";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const supabase = supabaseClient();
  const { showToast } = useToast();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Submitted form data:", form);
      await supabase.from("portfolio_data").insert([form]);

      setForm({ name: "", email: "", subject: "", message: "" });
      showToast({
        type: "success",
        message: "Thank you, your message has been sent",
      });
    } catch (error) {
      console.log(error)
      showToast({
        type: "error",
        message:
          "Sorry, your message couldn't been sent. You can reach us via whatsapp or any of our social media handle thank you",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-20">
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
              <a
                href={facebookLink}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Facebook
              </a>
              <a
                href={twitter}
                className="text-blue-400 hover:text-blue-600 font-semibold"
              >
                Twitter
              </a>
              <a
                href={instagram}
                className="text-pink-500 hover:text-pink-700 font-semibold"
              >
                Instagram
              </a>
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
