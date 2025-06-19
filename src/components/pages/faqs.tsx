"use client";

import { faqs } from "lib/mock/mock";
import { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen px-6 md:px-20 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 flex justify-between items-center"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-5 border-t text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-lg mb-4">
          Still have questions? Contact our support team for further assistance.
        </p>
        <a
          href="mailto:support@topstakacademy.com"
          className="bg-blue-800 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FAQPage;
