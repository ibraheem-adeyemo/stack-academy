"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <Image src="/Topstack1.png" alt="TopStak Logo" width={150} height={80} />
          <p className="mt-4 text-sm">
            TopStak Tech Academy — empowering individuals with real-world software engineering skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <p className="text-sm mb-2">Musat Filling Station, Okeresi Ede, Osun State</p>
          <p className="text-sm mb-2">Email: <a href="mailto:info@topstak.com" className="hover:text-white">info@topstak.com</a></p>
          <p className="text-sm mb-2">Phone: <a href="tel:+2347035853137" className="hover:text-white">+234 703 585 3137</a></p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="https://wa.me/2347035853137" target="_blank" className="hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TopStak Tech Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
