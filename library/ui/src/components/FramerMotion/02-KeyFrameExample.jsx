import { motion } from 'framer-motion';
import React from 'react';

export default function KeyFrameExample() {
  return (
    <div style={{ position: 'absolute', left: 100, top: 100 }}>
      <motion.div
        style={{
          backgroundColor: 'purple',
          height: 100,
          width: 100,
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      />
    </div>
  );
}
