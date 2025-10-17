import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "dipakmahajan282000@gmail.com",
      link: "mailto:dipakmahajan282000@gmail.com"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Surat, Gujarat",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/dipak-mahajan",
      link: "https://www.linkedin.com/in/dipak-mahajan-9017b821b/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed text-center">
                I'm always excited to work on new fullstack development projects and collaborate with innovative teams. 
                Whether you need a complete web application, API development, or technical consultation, 
                I'd love to discuss how I can help bring your vision to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-primary-600/50 rounded-lg p-6 transition-all duration-300 group w-full sm:w-80 text-center"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                  <p className="text-gray-400 text-sm group-hover:text-primary-400 transition-colors break-all">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            {/* <motion.div variants={itemVariants} className="pt-6 text-center">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                {[
                  { name: "GitHub", icon: "🐙", url: "https://github.com" },
                  { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
                  { name: "Instagram", icon: "📷", url: "https://instagram.com" },
                  { name: "Dribbble", icon: "🏀", url: "https://dribbble.com" }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-dark-800 hover:bg-primary-600 border border-dark-700 hover:border-primary-600 rounded-lg flex items-center justify-center text-xl transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
