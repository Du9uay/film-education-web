import React from 'react';
import { motion } from 'framer-motion';

interface PageVignetteProps {
  intensity?: 'light' | 'medium' | 'strong';
}

const PageVignette: React.FC<PageVignetteProps> = ({ intensity = 'medium' }) => {
  const opacityMap = {
    light: 0.15,
    medium: 0.25,
    strong: 0.35
  };

  return (
    <>
      {/* 电影镜头暗角效果 */}
      <div 
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,${opacityMap[intensity]}) 90%),
            radial-gradient(circle at center, transparent 40%, rgba(0,0,0,${opacityMap[intensity] * 0.7}) 100%)
          `,
        }}
      />
      
      {/* 宽银幕黑边效果 */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent"
          style={{ height: '8%', opacity: opacityMap[intensity] * 2 }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent"
          style={{ height: '8%', opacity: opacityMap[intensity] * 2 }}
        />
      </div>
      
      {/* 胶片划痕效果 */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        animate={{
          opacity: [0, 0.05, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: Math.random() * 10 + 5,
          ease: 'easeInOut',
        }}
      >
        <div
          className="absolute h-full"
          style={{
            width: '1px',
            left: `${Math.random() * 100}%`,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
          }}
        />
      </motion.div>
    </>
  );
};

export default PageVignette;