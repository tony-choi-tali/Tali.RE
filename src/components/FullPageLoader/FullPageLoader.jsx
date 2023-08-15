/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const FullPageLoader = () => {
  // state
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            key="bg-animation"
            className="h-screen w-screen fixed flex justify-center items-center bg-black z-[9998] left-0 top-0"
            initial={{ opacity: 1, x: "0%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ x: "100%", opacity: 0.8 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            key="image-animation"
            className="h-screen w-screen fixed flex justify-center items-center z-[9999] left-0 top-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-[120px] h-[120px] object-cover"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FullPageLoader;
