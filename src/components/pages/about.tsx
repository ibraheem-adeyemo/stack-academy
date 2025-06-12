"use client";

import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About TopStak Tech Academy</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Empowering the next generation of software engineers with world-class training, mentorship, and real-world experience.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 bg-gray-50">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At TopStak Tech Academy, our mission is to equip individuals with highly in-demand software engineering skills that enable them to thrive in today’s digital economy.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To become Africa’s leading tech academy, raising globally competitive software engineers who innovate, solve real-world problems, and make lasting impact.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 shadow rounded-lg bg-gray-100">
            <h3 className="text-xl font-bold mb-3">Excellence</h3>
            <p>We strive for the highest quality in teaching, learning, and delivery of our programs.</p>
          </div>
          <div className="p-6 shadow rounded-lg bg-gray-100">
            <h3 className="text-xl font-bold mb-3">Integrity</h3>
            <p>We maintain honesty, transparency, and fairness in all our operations.</p>
          </div>
          <div className="p-6 shadow rounded-lg bg-gray-100">
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p>We embrace creativity and continuously improve our curriculum to meet industry demands.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose TopStak Tech Academy?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <ul className="space-y-6 text-lg">
              <li>✅ Expert-led, hands-on training</li>
              <li>✅ Real-world projects & portfolio development</li>
              <li>✅ Internship and mentorship opportunities</li>
              <li>✅ Industry-relevant curriculum</li>
              <li>✅ Career support and job placement assistance</li>
            </ul>
          </div>
          <div>
            <Image src="/classroom.jpg" alt="Classroom" width={600} height={400} className="rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 text-center bg-blue-800 text-white">
        <h2 className="text-3xl font-bold mb-6">Join the TopStak Family Today</h2>
        <p className="text-lg mb-8">Take the first step toward your software engineering career. Apply now and let us help you reach your tech career goals.</p>
        <Link href="/courses">
          <button className="bg-white text-blue-800 px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Our Courses
          </button>
        </Link>
      </section>

    </div>
  )
}

export default AboutPage;
