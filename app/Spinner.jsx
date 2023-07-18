import React from 'react';
import { motion } from 'framer-motion';

const pointAnimation = (delay) => {
    return {
    initial: { scale: 1 },
    animate: { scale: 0.5 },
    transition: {duration: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay}
    }
}

const pointStyles = "w-[7px] h-[7px] bg-gray-800 rounded-full"

const Spinner = () => {
  return (
    <div className="h-10 flex items-center justify-center">
      <div
              className="flex items-center space-x-2"
      >
        <motion.div className={pointStyles} {...pointAnimation(0)}></motion.div>
        <motion.div className={pointStyles} {...pointAnimation(0.2)}></motion.div>
        <motion.div className={pointStyles} {...pointAnimation(0.4)}></motion.div>
        
      </div>
    </div>
  );
};

export default Spinner;