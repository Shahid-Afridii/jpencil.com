'use client';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const DropshipSection = () => {
  // Controls for animation
  const controls = useAnimation();

  // Ref and inView hook from react-intersection-observer
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // 20% of the component needs to be in view
  });

  // Start animation when the section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref} // Attach the section to the inView hook
      className=" text-[#1B1464] py-16 relative overflow-hidden"
    >
      <motion.h2
        className="absolute top-0 left-0 right-0 text-center text-lg lg:text-3xl font-extrabold p-4 text-[#1B1464] z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } },
        }}
      >
        First ever <span className="text-yellow-500">Gold Jewellery</span> Dropship Product in India
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Main Image */}
        <motion.div
          className="col-span-1 block md:flex md:justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.8 } },
          }}
        >
          <Image
            src="/images/section2.png" // Replace with your actual image path
            alt="Main Section Image"
            width={500}
            height={500}
            objectFit="contain"
            quality={100}
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="col-span-1 space-y-6 p-2 lg:p-0">
          {/* Content Block 1 */}
          <motion.div
            className="bg-[#E0F4F9] p-6 rounded-xl shadow-lg flex items-start ml-0 lg:ml-20"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8 } },
            }}
          >
            <div className="flex-shrink-0 bg-[#1B1464] p-3 rounded-lg">
              <Image
                src="/images/icon-0122.png" // Replace with your icon image path
                alt="Start Business Icon"
                width={40}
                height={40}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-md lg:text-lg font-bold">START YOUR OWN BUSINESS</h3>
              <p className="text-sm text-gray-600">
                Want to start your jewellery business without investing in gold, but want to make the jewellery profits?
              </p>
            </div>
          </motion.div>

          {/* Content Block 2 */}
          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg flex items-start ml-0 lg:ml-40"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.8 } },
            }}
          >
            <div className="flex-shrink-0 bg-[#1B1464] p-3 rounded-lg">
              <Image
                src="/images/icon-0212.png" // Replace with your icon image path
                alt="Dropship Product Icon"
                width={40}
                height={40}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-md lg:text-lg font-bold">DROPSHIP PRODUCT</h3>
              <p className="text-sm text-gray-600">
                The manufacturing and logistics for your gold product are taken care of with automatic pricing.
              </p>
            </div>
          </motion.div>

          {/* Content Block 3 */}
          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg flex items-start ml-0 lg:ml-20"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.8 } },
            }}
          >
            <div className="flex-shrink-0 bg-[#1B1464] p-3 rounded-lg">
              <Image
                src="/images/icon-0312.png" // Replace with your icon image path
                alt="We Handle Icon"
                width={40}
                height={40}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-md lg:text-lg font-bold">WE WILL HANDLE</h3>
              <p className="text-sm text-gray-600">
                You can sell jewellery that you don't stock, just start your business with dropship and we'll take care of the rest.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DropshipSection;
