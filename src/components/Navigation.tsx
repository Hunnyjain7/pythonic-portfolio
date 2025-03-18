"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter, FaCode } from 'react-icons/fa6';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#2d2d2d] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-fira-code text-green-400 hover:text-green-300">
              <span className="text-xl">def</span>{" "}
              <span className="text-blue-400">hunny_jain</span>
              <span className="text-white">()</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-gray-300 hover:text-white font-fira-code">
              .about()
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-white font-fira-code">
              .skills()
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-white font-fira-code">
              .experience()
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white font-fira-code">
              .projects()
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white font-fira-code">
              .contact()
            </Link>
            <div className="flex space-x-4 pl-2 border-l border-gray-700">
              <Link
                href="https://github.com/Hunnyjain7" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/hunnyjain7/" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </Link>
              <Link 
                href="https://x.com/hunnyjain7" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X (Twitter) Profile"
              >
                <FaXTwitter />
              </Link>
              <Link 
                href="https://leetcode.com/hunnyjain7" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LeetCode Profile"
              >
                <FaCode />
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden font-fira-code">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#252525]">
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              .about()
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              .skills()
            </Link>
            <Link
              href="#experience"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              .experience()
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              .projects()
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              .contact()
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              <Link
                href="https://github.com/Hunnyjain7" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/hunnyjain7/" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </Link>
              <Link 
                href="https://x.com/hunnyjain7" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X (Twitter) Profile"
              >
                <FaXTwitter />
              </Link>
              <Link 
                href="https://leetcode.com/hunnyjain7" 
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LeetCode Profile"
              >
                <FaCode />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 