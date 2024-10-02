'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ClientsSection = () => {
  // Controls for animations
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

  // Variants for the heading and logos
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggeredLogos = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const logoItem = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="container mx-auto py-12 px-4 lg:px-0 text-center"
      initial="hidden"
      animate={controls}
    >
      {/* Section Heading */}
      <motion.h2
        className="text-3xl lg:text-4xl font-bold italic mb-4"
        variants={fadeInUp}
      >
        Trusted by Our Satisfied Clients
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 mb-8"
        variants={fadeInUp}
      >
        Our satisfied clients are a testament to our consistent quality and dedication. Their trust fuels our passion for excellence.
      </motion.p>

      {/* Logos - Centered */}
      <motion.div
        className="flex justify-center items-center"
        variants={staggeredLogos}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            "/images/darlogo.jpeg",
            "/images/tarang.jpeg",
            "/images/shreeAnnai.jpeg",
            "/images/vishnu.jpeg",
            "/images/thooriha.jpeg",
            "/images/sathya.jpeg"
          ].map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md"
              variants={logoItem}
            >
              <img src={logo} alt={`Client ${index + 1}`} className="max-w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ClientsSection;
