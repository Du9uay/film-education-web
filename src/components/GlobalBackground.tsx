import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 电影胶片孔组件 - 左侧（带动画）
const FilmPerforationsLeft: React.FC = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 w-20 pointer-events-none z-20 opacity-70">
      <motion.div 
        className="relative h-full bg-gradient-to-r from-black/30 to-transparent"
        animate={{
          y: [0, -100],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`left-${i}`}
            className="absolute left-6 w-4 h-5 bg-black/60 rounded-sm border border-gray-500/40 shadow-sm"
            style={{
              top: `${i * 4}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

// 电影胶片孔组件 - 右侧（带动画）
const FilmPerforationsRight: React.FC = () => {
  return (
    <div className="absolute top-0 bottom-0 right-0 w-20 pointer-events-none z-20 opacity-70">
      <motion.div 
        className="relative h-full bg-gradient-to-l from-black/25 to-transparent"
        animate={{
          y: [-100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`right-${i}`}
            className="absolute right-6 w-4 h-5 bg-black/50 rounded-sm border border-gray-500/40 shadow-sm"
            style={{
              top: `${i * 4}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

// 光束效果组件
const ProjectorBeam: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 3 }}
    >
      {/* 主光束 - 从右上角投射 */}
      <div
        className="absolute top-0 right-0 w-full h-full"
        style={{
          background: `
            conic-gradient(
              from 45deg at 100% 0%,
              transparent 65deg,
              rgba(255, 215, 0, 0.12) 70deg,
              rgba(255, 215, 0, 0.20) 90deg,
              rgba(255, 215, 0, 0.12) 110deg,
              transparent 115deg,
              transparent 360deg
            )
          `,
          filter: 'blur(30px)',
        }}
      />
      

    </motion.div>
  );
};

// 电影帘幕纹理
const CinemaTexture: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.1) 2px,
              rgba(0, 0, 0, 0.1) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.05) 2px,
              rgba(0, 0, 0, 0.05) 4px
            )
          `,
        }}
      />
    </div>
  );
};

// 电影放映闪烁效果
const ProjectorFlicker: React.FC = () => {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 100);
    }, Math.random() * 8000 + 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {flicker && (
        <motion.div
          className="absolute inset-0 bg-white/5 pointer-events-none z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
      )}
    </AnimatePresence>
  );
};

// 电影字幕滚动效果 - 左侧（与胶卷孔同步）
const FilmCreditsLeft: React.FC = () => {
  const credits = [
    "DIRECTOR", "CINEMATOGRAPHER", "EDITOR", "PRODUCER", 
    "SCREENPLAY", "MUSIC", "CAST", "PRODUCTION"
  ];

  return (
    <div className="absolute left-0 top-0 h-full w-40 pointer-events-none overflow-hidden opacity-40">
      <motion.div
        className="flex flex-col gap-24"
        animate={{
          y: [0, -2400],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...credits, ...credits, ...credits, ...credits, ...credits].map((credit, i) => (
          <div
            key={i}
            className="text-[color:var(--gold-cinema)] font-bold text-sm tracking-[3px] transform -rotate-90"
            style={{
              writingMode: 'vertical-rl',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.7)',
            }}
          >
            {credit}
          </div>
        ))}
      </motion.div>
    </div>
  );
};


// 电影胶片条效果
const FilmStrip: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden opacity-40">
      <motion.div
        className="flex gap-3"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-40 h-24 bg-gradient-to-b from-gray-700/50 to-gray-800/30 border border-gray-600/60 rounded-lg shadow-xl"
          >
            <div className="w-full h-full flex items-center justify-center p-2">
              <div className="w-32 h-16 bg-gradient-to-br from-gray-600/40 to-gray-700/20 rounded border border-gray-500/40" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// 聚光灯效果
const Spotlight: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none opacity-60"
      animate={{
        background: [
          'radial-gradient(circle at 25% 40%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)',
          'radial-gradient(circle at 75% 60%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)',
          'radial-gradient(circle at 60% 25%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)',
          'radial-gradient(circle at 40% 75%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)',
          'radial-gradient(circle at 25% 40%, rgba(255, 215, 0, 0.15) 0%, transparent 50%)',
        ],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

// 环境光效增强
const AmbientLighting: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[color:var(--gold-cinema)]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '2s', animationDuration: '4s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-400/12 rounded-full blur-2xl animate-pulse"
           style={{ animationDelay: '1s', animationDuration: '3s' }} />
    </div>
  );
};

// 主背景组件
const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* 调整后的基础背景 - 更亮的电影院色调 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950" />
      
      {/* 电影幕布质感 - 减少暗度 */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at top, transparent 0%, rgba(0,0,0,0.2) 100%),
            radial-gradient(ellipse at bottom, rgba(0,0,0,0.4) 0%, transparent 100%)
          `,
        }}
      />
      
      {/* 环境光效 */}
      <AmbientLighting />
      
      {/* 电影帘幕纹理 */}
      <CinemaTexture />
      
      {/* 投影光束效果 */}
      <ProjectorBeam />
      
      {/* 聚光灯效果 */}
      <Spotlight />
      
      {/* 电影胶片孔 - 左右两侧 */}
      <FilmPerforationsLeft />
      <FilmPerforationsRight />
      
      {/* 电影字幕滚动 - 仅左侧 */}
      <FilmCreditsLeft />
      
      {/* 底部胶片条 */}
      <FilmStrip />
      
      {/* 放映闪烁效果 */}
      <ProjectorFlicker />
      
      {/* 优化的噪点纹理 - 更细腻 */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* 优化的暗角效果 - 减少强度 */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.2) 100%),
            radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.15) 100%)
          `,
        }}
      />
    </div>
  );
};

export default GlobalBackground;