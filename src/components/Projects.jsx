import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import omsImage from '../assets/oms.png';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Oms Inventory Management System",
      description: "This software streamlines profit and loss calculations for e-commerce sellers, presenting the easiest and most efficient way to track financial gains and losses. It offers a user-friendly interface for comprehensive insights into business finances, empowering sellers to make informed decisions and optimize profitability.",
      image: omsImage,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      liveUrl: "https://aumsoft.vercel.app/login",
      githubUrl: "https://github.com/dipakmahajan01/Ecomsoft-Be",
      featured: false,
    },
    {
      title: "Real Time Notification System",
      description: "A powerful real-time notification system built with Redis, Socket.io, and pub/sub architecture. Enables instant message delivery across multiple clients with scalable backend infrastructure. Perfect for chat applications, live updates, and real-time collaboration features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "Redis", "Express", "TypeScript"],
      liveUrl: "https://real-time-notification-fe.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
    // {
    //   title: "Task Management App",
    //   description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.",
    //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    //   technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "TypeScript"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: true,
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description: "Analytics dashboard for social media management with real-time metrics and data visualization.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    //   technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "Blog Platform",
    //   description: "Full-featured blog platform with user authentication, content management, and SEO optimization.",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    //   technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "API Gateway Service",
    //   description: "Microservices API gateway with authentication, rate limiting, and request routing capabilities.",
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    //   technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: true,
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "Real-time weather application with interactive maps, forecasts, and data visualization.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    //   technologies: ["React", "Chart.js", "Node.js", "OpenWeather API"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
  ];

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
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I've Cooked Up 👨‍🍳
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-600/50 transition-all duration-300 mb-8"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary-600/20 to-primary-800/20 p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      <div className="bg-dark-900/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700/50">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-2xl">🚀</span>
                      </div>
                      
                      <p className="text-white mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-dark-700/50 border border-dark-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-600/20 hover:border-primary-600/50 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 border border-primary-600 hover:bg-primary-600 text-primary-400 hover:text-white text-center py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        <span>GitHub</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
