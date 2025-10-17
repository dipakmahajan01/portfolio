import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage = ({ src, alt = "Profile Picture", className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`relative mb-8 inline-block ${className}`}
    >
      <div className="relative">
        {/* Profile Image Container */}
        <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
            {src ? (
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="text-white text-6xl">👨‍💻</div>
            )}
          </div>
        </div>
        
        {/* Floating elements around profile */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
        >
          ✨
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -bottom-2 -left-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg"
        >
          💻
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [0, 5, 0],
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-8 -left-6 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg"
        >
          ⚡
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
