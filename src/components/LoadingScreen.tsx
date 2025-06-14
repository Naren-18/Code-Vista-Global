import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Show loading screen for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.div
          variants={textVariants}
          className="mb-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gold tracking-wider">
            Code Vista Global
          </h1>
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '220px', opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="h-1 bg-gold rounded-full shadow-lg"
            style={{ boxShadow: '0 0 16px 2px #FFD70080' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 