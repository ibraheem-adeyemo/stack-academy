"use client";

import React, { useState } from "react";
import { HeartIcon } from "@radix-ui/react-icons";
import { generateClassName } from "lib/utils";
import Link from "next/link";
import Image from "next/image";

type CourseCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  link: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  price,
  link,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative h-60">
        <Image src={image} alt={title} fill />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <button
            onClick={() => setLiked(!liked)}
            className={generateClassName(
              "p-1 rounded-full hover:bg-gray-100 transition",
              liked ? "text-red-500" : "text-gray-400",
            )}
            aria-label="Like"
          >
            <HeartIcon className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-600 text-sm">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-active-blue-700">
            {price}
          </span>
          <Link
            href={link}
            className="bg-active-blue-700 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
