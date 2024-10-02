'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const StoreSection = () => {
  // Controls for animations
  const controls = useAnimation();

  // Ref and inView hook for triggering animation
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  // Start animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut", delayChildren: 0.4, staggerChildren: 0.2 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="container mx-auto py-16 px-4 lg:px-0"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      {/* Section heading */}
      <motion.div
        className="mb-10 text-center lg:text-left"
        variants={fadeInUp}
      >
        <h2 className="text-yellow-500 text-lg font-bold">Build Your Own Online Store</h2>
        <h1 className="text-3xl lg:text-5xl font-bold text-[#1B1464]">
          Design your website and app, <span className="text-blue-600">All by yourself</span>
        </h1>
      </motion.div>

      {/* Left Side Content - Bullet Points */}
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.ul className="list-none space-y-6" variants={fadeInUp}>
          {[
            "Start Your Jewelry Business",
            "Maximize Your Profits",
            "Design-Driven Sales",
            "Automated Live Gold Pricing",
          ].map((item, index) => (
            <motion.li
              className="flex items-start"
              key={index}
              variants={itemVariant}
            >
              <FaCheckCircle className="text-blue-500 w-8 h-8 mr-4" />
              <span className="text-lg font-semibold">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Side - Cards */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-12" variants={fadeInUp}>
          {[
            {
              id: "01",
              title: "Launch your own jewellery business without needing to invest in gold.",
              icon: "/images/business.png",
              bgColor: "bg-blue-100",
              textColor: "text-blue-600",
            },
            {
              id: "02",
              title: "Enjoy the benefits of jewellery profits without the risk of stocking inventory.",
              icon: "/images/profit.png",
              bgColor: "bg-yellow-100",
              textColor: "text-yellow-600",
            },
            {
              id: "03",
              title: "Sell jewellery designs without holding any stock; we'll manage the manufacture for you.",
              icon: "/images/jewelry.png",
              bgColor: "bg-purple-100",
              textColor: "text-purple-600",
            },
            {
              id: "04",
              title: "Display live gold pricing automatically to keep your customers informed and engaged.",
              icon: "/images/live.png",
              bgColor: "bg-green-100",
              textColor: "text-green-600",
            },
          ].map((card, index) => (
            <motion.div
              className={`${card.bgColor} p-8 rounded-xl relative flex items-center shadow-lg`}
              key={index}
              variants={itemVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -left-10 transform translate-y-[-50%] bg-white mt-20 rounded-lg shadow-lg w-24 h-24 flex justify-center items-center">
                <img src={card.icon} alt={`Icon ${card.id}`} className="w-12 h-12" />
              </div>
              <div className="ml-16">
                <h3 className={`${card.textColor} text-5xl font-bold`}>{card.id}</h3>
                <p className="text-md text-black font-semibold mt-2">{card.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default StoreSection;
