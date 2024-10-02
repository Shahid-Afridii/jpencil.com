'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const OwnProducts = () => {
  // Controls for animation
  const controls = useAnimation();

  // Ref and inView hook for triggering animation
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once when it comes into view
    threshold: 0.3, // Trigger the animation when 30% of the section is visible
  });

  // Start animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref} // Attach the section to the inView hook
      className="container mx-auto py-12 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#1B1464]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      {/* Left Side - Image */}
      <motion.div
        className="flex justify-center items-center h-full"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <Image
          src="/images/section3.png" // Replace with the correct image path
          alt="Own Product Uploading"
          width={500}
          height={500}
          objectFit="contain"
          quality={100}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div
        className="col-span-1 space-y-6 p-2 lg:p-0 h-full flex flex-col justify-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
        }}
      >
        <div>
          <h2 className="text-lg lg:text-4xl font-extrabold text-[#1B1464]">
            Access <span className="text-yellow-500">exclusive</span>
          </h2>
          <h2 className="text-lg lg:text-4xl font-extrabold text-[#1B1464]">
            features by making purchases
          </h2>
          <h2 className="text-lg lg:text-4xl font-extrabold text-[#1B1464]">
            through our online store.
          </h2>
          <div className="border-b-4 border-blue-600 w-[20rem] my-4"></div> {/* Solid blue line */}
        </div>

        <ul className="list-none space-y-6">
          <motion.li
            className="flex items-start space-x-2"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
            }}
          >
            <FaCheckCircle className="text-blue-500 w-12 h-8" /> {/* React Icon */}
            <div>
              <h3 className="font-bold text-md lg:text-2xl">Sell Your Own Products with Ease</h3>
              <p className="text-md lg:text-xl p-3 text-gray-600">
                Ready to start dropshipping? We make it simple to sell your own products online.
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex items-start space-x-2"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.7 } },
            }}
          >
            <FaCheckCircle className="text-blue-500 w-12 h-8" /> {/* React Icon */}
            <div>
              <h3 className="font-bold text-md lg:text-2xl">User-Friendly Management Interface</h3>
              <p className="text-md lg:text-xl p-3 text-gray-600">
                Our platform offers a fantastic user interface to manage your stock effortlessly.
              </p>
            </div>
          </motion.li>

          <motion.li
            className="flex items-start space-x-2"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } },
            }}
          >
            <FaCheckCircle className="text-blue-500 w-12 h-8" /> {/* React Icon */}
            <div>
              <h3 className="font-bold text-md lg:text-2xl">Streamlined Model Numbering System</h3>
              <p className="text-md lg:text-xl p-3 text-gray-600">
                Easily display and organize your products using an efficient model numbering system.
              </p>
            </div>
          </motion.li>
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default OwnProducts;
