"use client";

import Link from 'next/link';
import Image from 'next/image';  // Import the Next.js Image component
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-50 text-[#1B1464] py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* Mobile Menu Icon (Visible on tablet and mobile) */}
        <div className="lg:hidden flex items-center">  {/* Changed md to lg */}
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Logo (Next.js Image) - Adjusted to fix spacing */}
        <motion.div
          className="flex items-center justify-center lg:justify-start flex-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image 
              src="/images/logoN.png"   // Replace with your image path
              alt="JPencil Logo"
              width={140}  // Adjust the width of your logo if necessary
              height={40}  // Adjust the height of your logo
              className="h-auto w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Nav Links (Hidden on tablet and mobile) */}
        <nav className="hidden lg:flex space-x-6 text-[#1B1464] tracking-wide font-extrabold flex-grow justify-center">  {/* Changed md to lg */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/services" className="">
              FEATURES <AiOutlineDown className="inline-block ml-1" />
            </Link>
           
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <Link href="/projects" className="">
              PRICING
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
            <Link href="/process" className="">
              DROPSHIP
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <Link href="/open-source" className="">
              HELP
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
            <Link href="/blog" className="">
              OUR BLOG
            </Link>
          </motion.div>
        </nav>

        {/* Contact Us Button - Flex adjusted to fix spacing */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex items-center flex-none">  {/* Changed md to lg */}
          <Link href="/contact" className="bg-white text-[#1E1F30] font-extrabold px-4 py-2 rounded-full flex items-center">
            CONTACT US <FaPhone className="ml-2 text-blue-500" />
          </Link>
        </motion.div>
      </div>

      {/* Mobile and Tablet Menu Semi-modalscle */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-0 text-[#1B1464] right-0 w-3/4 h-full bg-[#1E1F30] z-50 p-6 lg:hidden"  
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={toggleMobileMenu} className="text-white mb-4">
            <FaTimes size={24} />
          </button>
          <Link href="/services" className="block mb-4 text-lg text-white hover:text-gray-400">
            FEATURES
          </Link>
          <Link href="/projects" className="block mb-4 text-lg text-white hover:text-gray-400">
            PRICING
          </Link>
          <Link href="/process" className="block mb-4 text-lg text-white hover:text-gray-400">
          DROPSHIP
          </Link>
          <Link href="/open-source" className="block mb-4 text-lg text-white hover:text-gray-400">
          HELP
          </Link>
          <Link href="/blog" className="block mb-4 text-lg text-white hover:text-gray-400">
            OUR BLOG
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
