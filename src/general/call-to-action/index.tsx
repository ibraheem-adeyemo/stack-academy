import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-center bg-active-blue-100 text-active-blue-800">
      <h2 className="text-3xl font-bold mb-6">Join the TopStak Family Today</h2>
      <p className="text-lg mb-8">
        Take the first step toward your software engineering career. Apply now
        and let us help you reach your tech career goals.
      </p>
      <Link href="/courses">
        <button className="bg-active-blue-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-active-blue-400 cursor-pointer transition">
          Explore Our Courses
        </button>
      </Link>
    </section>
  );
};

export default CallToAction;
