import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            />
          </motion.div>

          {/* Content Container */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-8">
            {/* Main Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
              >
                I'm a passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with 
                <span className="text-green-400 font-semibold"> 3+ years of experience</span> building 
                scalable web applications that make a real difference.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
              >
                My journey began with a curiosity about how applications work, which led me to 
                master both frontend and backend technologies. Today, I build 
                <span className="text-purple-400 font-medium"> end-to-end solutions</span> that 
                solve real-world problems and drive business growth.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
              >
                I specialize in creating <span className="text-yellow-400 font-medium">robust backend systems</span>{' '}
                and <span className="text-pink-400 font-medium">intuitive frontend interfaces</span> that 
                deliver exceptional user experiences. Every project is an opportunity to learn, 
                innovate, and create something amazing.
              </motion.p>
            </motion.div>

            {/* Stats/Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="text-white font-bold text-lg mb-2">3+ Years</h4>
                <p className="text-blue-300 text-sm">Experience</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl mb-2">💻</div>
                <h4 className="text-white font-bold text-lg mb-2">Remote</h4>
                <p className="text-green-300 text-sm">Work Ready</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="text-white font-bold text-lg mb-2">Full-Stack</h4>
                <p className="text-purple-300 text-sm">Expertise</p>
              </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl text-lg shadow-lg transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
