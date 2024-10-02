'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const GoldPlanSection = () => {
  // Animation controls for both sides
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2,    // When 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variants for the image and text content
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  const fadeInItems = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="container mx-auto px-4 lg:px-0 flex flex-wrap items-center justify-between py-12"
      initial="hidden"
      animate={controls}
    >
      {/* Left Side - Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0"
        variants={fadeInFromLeft}
      >
        <img
          src="/images/goldPlan.png"  // Replace with your actual image path
          alt="Smart Gold Purchase Plan"
          className="max-w-[300px] sm:max-w-[400px] lg:max-w-full h-auto"
        />
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        variants={fadeInFromRight}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B1464] mb-6">
          Start and Facilitate Retail Jewellery promotional Products
        </h2>

        {/* Features List */}
        <motion.ul className="space-y-6" variants={fadeInItems}>
          <motion.li className="flex items-start justify-center lg:justify-start">
            <FaCheckCircle className="text-blue-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Customizable Purchase Plans</h3>
              <p className="text-sm sm:text-md text-gray-600">Enjoy the saving schemes and digital gold options that are fully customizable to your needs.</p>
            </div>
          </motion.li>

          <motion.li className="flex items-start justify-center lg:justify-start">
            <FaCheckCircle className="text-blue-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Convenient Access</h3>
              <p className="text-sm sm:text-md text-gray-600">Manage everything effortlessly, all at just a click away.</p>
            </div>
          </motion.li>
        </motion.ul>

        {/* Button */}
        <motion.div className="mt-8" variants={fadeInItems}>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            View More
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default GoldPlanSection;
