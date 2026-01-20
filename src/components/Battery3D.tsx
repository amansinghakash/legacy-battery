import React, { useState } from 'react';
import { motion } from 'motion/react';

interface Battery3DProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'green' | 'orange';
  animated?: boolean;
  interactive?: boolean;
}

export const Battery3D: React.FC<Battery3DProps> = ({
  size = 'lg',
  color = 'blue',
  animated = true,
  interactive = true,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-32 h-48',
    md: 'w-48 h-64',
    lg: 'w-64 h-96',
    xl: 'w-96 h-[32rem]',
  };

  const colorSchemes = {
    blue: {
      primary: '#00d9ff',
      secondary: '#0088ff',
      glow: 'rgba(0, 217, 255, 0.6)',
    },
    green: {
      primary: '#00ff88',
      secondary: '#00cc66',
      glow: 'rgba(0, 255, 136, 0.6)',
    },
    orange: {
      primary: '#ff8800',
      secondary: '#ff6600',
      glow: 'rgba(255, 136, 0, 0.6)',
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 10;
    const y = (e.clientX - rect.left - rect.width / 2) / 10;
    setRotation({ x: -x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const scheme = colorSchemes[color];

  return (
    <div
      className={`relative ${sizeClasses[size]} flex items-center justify-center`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Battery Body */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${scheme.primary}22 0%, ${scheme.secondary}11 100%)`,
            borderRadius: '1.5rem',
            border: `2px solid ${scheme.primary}44`,
            boxShadow: isHovered
              ? `0 0 60px ${scheme.glow}, 0 0 100px ${scheme.glow}44, inset 0 0 40px ${scheme.glow}22`
              : `0 0 40px ${scheme.glow}, 0 0 60px ${scheme.glow}22, inset 0 0 20px ${scheme.glow}11`,
            backdropFilter: 'blur(8px)',
            transform: 'translateZ(0px)',
          }}
          animate={{
            boxShadow: animated
              ? [
                  `0 0 40px ${scheme.glow}, 0 0 60px ${scheme.glow}22`,
                  `0 0 60px ${scheme.glow}, 0 0 80px ${scheme.glow}44`,
                  `0 0 40px ${scheme.glow}, 0 0 60px ${scheme.glow}22`,
                ]
              : undefined,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Energy Level Indicator */}
          <motion.div
            className="absolute inset-x-4 bottom-4 top-24"
            style={{
              background: `linear-gradient(to top, ${scheme.primary}88 0%, ${scheme.primary}00 100%)`,
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
            animate={{
              opacity: animated ? [0.6, 1, 0.6] : 0.8,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Energy Waves */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-x-0 h-1"
                style={{
                  background: scheme.primary,
                  boxShadow: `0 0 10px ${scheme.glow}`,
                }}
                animate={{
                  bottom: animated ? ['0%', '100%'] : '50%',
                  opacity: animated ? [0, 1, 0] : 0.5,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'linear',
                }}
              />
            ))}
          </motion.div>

          {/* Top Terminal */}
          <motion.div
            className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-6"
            style={{
              background: `linear-gradient(to bottom, ${scheme.primary}, ${scheme.secondary})`,
              borderRadius: '0.5rem 0.5rem 0 0',
              boxShadow: `0 0 20px ${scheme.glow}`,
              transform: 'translateZ(20px)',
            }}
            animate={{
              boxShadow: isHovered
                ? `0 0 30px ${scheme.glow}, 0 0 50px ${scheme.glow}44`
                : `0 0 20px ${scheme.glow}`,
            }}
          />

          {/* Corner Details */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-3 h-3 rounded-full`}
              style={{
                background: scheme.primary,
                boxShadow: `0 0 10px ${scheme.glow}`,
              }}
            />
          ))}

          {/* Circuit Pattern */}
          <svg
            className="absolute inset-0 opacity-30"
            style={{ mixBlendMode: 'overlay' }}
          >
            <defs>
              <pattern id={`circuit-${color}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M0 20h20M20 0v20M20 20h20M20 20v20"
                  stroke={scheme.primary}
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.5"
                />
                <circle cx="20" cy="20" r="2" fill={scheme.primary} opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#circuit-${color})`} />
          </svg>

          {/* Center Logo Area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              animate={{
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1.1 : 1,
              }}
            >
              <div
                className="text-6xl font-black tracking-wider"
                style={{
                  color: scheme.primary,
                  textShadow: `0 0 20px ${scheme.glow}, 0 0 40px ${scheme.glow}`,
                }}
              >
                L
              </div>
              <div
                className="text-xs tracking-widest mt-2"
                style={{
                  color: scheme.primary,
                  textShadow: `0 0 10px ${scheme.glow}`,
                }}
              >
                LEGACY
              </div>
            </motion.div>
          </div>

          {/* Power Percentage */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{
              opacity: animated ? [0.5, 1, 0.5] : 0.8,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div
              className="text-2xl font-black"
              style={{
                color: scheme.primary,
                textShadow: `0 0 15px ${scheme.glow}`,
              }}
            >
              100%
            </div>
          </motion.div>
        </motion.div>

        {/* Glow Aura */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-3xl blur-3xl"
          style={{
            background: `radial-gradient(circle, ${scheme.glow} 0%, transparent 70%)`,
          }}
          animate={{
            scale: animated ? [1, 1.2, 1] : 1,
            opacity: animated ? [0.3, 0.6, 0.3] : 0.4,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
};
