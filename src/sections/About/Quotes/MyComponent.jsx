import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MyComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <motion.div
        layout
        style={{
          width: isExpanded ? '300px' : '100px',
          height: '100px',
          backgroundColor: 'lightseagreen',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      >
        <motion.h2 layout>{isExpanded ? "iadhauheahdu9qwdbfgouawrydkhfbvsiydefvywsefysdyf" : "Expand"}</motion.h2>
      </motion.div>
    </div>
  );
};

export default MyComponent;
