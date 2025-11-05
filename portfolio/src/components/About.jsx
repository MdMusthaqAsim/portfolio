import React from 'react'

import { FaFileAlt, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Write your about me section here. Share your background, experience, and what you're passionate about.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {[
            { href: "/resume.pdf", label: "Resume", dark: true }
          ].map(({ href, label, dark }) => (
            <a
              key={label}
              href={href}
              download
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors justify-center ${
                dark
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              <FaFileAlt /> Download {label} <FaDownload size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
