import React from "react";
import { FaFileAlt, FaDownload, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column — About Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I'm a CSE (AI & ML) undergraduate passionate about crafting seamless, intelligent digital experiences. I love building
            interactive and visually engaging interfaces, exploring data-driven systems, and applying machine learning concepts to
            solve real-world problems. I'm driven by curiosity, creativity, and the desire to turn complex ideas into intuitive
            and meaningful products.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaFileAlt />
            Download Resume
            <FaDownload size={14} />
          </a>
        </div>

        {/* Right Column — Contact Info */}
        <div className="bg-white shadow-sm rounded-lg p-8 text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact</h3>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gray-600" />
              <a href="mailto:musthaqasim.shaik@gmail.com" className="hover:underline">
                musthaqasim.shaik@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-gray-600" />
              <a href="tel:+918885591626" className="hover:underline">
                +91 88855 91626
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-gray-600" />
              <a
                href="https://github.com/MdMusthaqAsim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/MdMusthaqAsim
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-gray-600" />
              <a
                href="https://linkedin.com/in/mdasimshaik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/mdasimshaik
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
