"use client";

import Image from "next/image";
import { courses2 as courses } from "lib/mock/mock";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="h-48 relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-active-blue-600 font-bold">
                  {course.duration}
                </span>
                <Link
                  href={`courses/${course.href}`}
                  className="bg-active-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-active-blue-400 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
