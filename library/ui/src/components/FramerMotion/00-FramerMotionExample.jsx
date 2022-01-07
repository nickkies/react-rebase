import React from 'react';
import { motion } from 'framer-motion';

export default function FramerMotionExample() {
  return (
    <div style={{ position: 'absolute', left: 300, top: 300 }}>
      <motion.div
        style={{
          backgroundColor: 'pink',
          height: 100,
          width: 100,
        }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
}
