import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MultiText.scss";

interface MultiTextProps {
  values?: string[];
  interval?: number;
}

const MultiText: React.FC<MultiTextProps> = ({
  values = ["1x", "2x", "3x"],
  interval = 1500
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= values.length - 1) return; // stop at last item

    const timer = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, interval);

    return () => clearTimeout(timer);
  }, [index, interval, values.length]);

  return (
    <div className="multi-text-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={values[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="multi-text"
        >
          {values[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MultiText;
