import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import profilePic from '../assets/joy_passport.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-light/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-light/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-light font-medium tracking-wide mb-2 uppercase">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Joysankar</span>
              <br />
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'Backend Architect',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-4xl md:text-5xl lg:text-6xl text-dark-text mt-4 inline-block"
              />
            </h1>
            <p className="text-dark-muted text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
              Specializing in the JavaScript ecosystem. I build production-ready enterprise frontends and architect scalable backend APIs to create exceptional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="group flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-primary/20"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center gap-2 glass px-6 py-3 rounded-full text-dark-text font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 relative z-10 glass flex items-center justify-center">
              <img src={profilePic} alt="Joysankar Saikia" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-30 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
