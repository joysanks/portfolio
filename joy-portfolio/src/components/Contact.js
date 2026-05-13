import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-dark-muted max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-4 glass p-6 rounded-2xl flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-dark-muted">Email</p>
                <a href="mailto:saikiajoysankar@gmail.com" className="text-sm md:text-base font-medium text-white hover:text-primary-light transition-colors break-all">
                  saikiajoysankar@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 glass p-6 rounded-2xl flex-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary-light shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-dark-muted">Phone</p>
                <a href="tel:+916000271467" className="text-sm md:text-base font-medium text-white hover:text-secondary-light transition-colors">
                  +91-6000271467
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 glass p-6 rounded-2xl flex-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-dark-muted">Location</p>
                <p className="text-sm md:text-base font-medium text-white">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 pt-8 pb-8 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/joysanks" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-dark-muted hover:text-primary-light hover:border-primary-light transition-all">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/joysankar-saikia-7688ba209/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-dark-muted hover:text-secondary-light hover:border-secondary-light transition-all">
            <LinkedinIcon size={20} />
          </a>
        </div>
        <p className="text-dark-muted text-sm">
          &copy; {new Date().getFullYear()} Joysankar Saikia. Built with React & Tailwind.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
