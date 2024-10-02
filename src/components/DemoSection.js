'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const DemoSection = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate once when in view
    threshold: 0.2,    // When 20% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variants for text and image
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

  return (
    <motion.section
      ref={ref}
      className="container mx-auto py-12 px-4 lg:px-0 flex flex-col lg:flex-row items-center justify-between"
      initial="hidden"
      animate={controls}
    >
      {/* Left Side - Text Content */}
      <motion.div
        className="text-center lg:text-left w-full lg:w-1/2 mb-8 lg:mb-0"
        variants={fadeInFromLeft}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1B1464] mb-4">Schedule a demo right now!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Don’t wait - schedule your demo now and unlock the full potential of our platform!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
          Click Here
        </button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        variants={fadeInFromRight}
      >
        <img
          src="/images/lorem.png"  // Replace with your actual image path
          alt="Demo Illustration"
          className="max-w-full h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default DemoSection;
