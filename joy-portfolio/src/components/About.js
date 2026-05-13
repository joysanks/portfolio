import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="text-primary-light" size={24} />,
      title: "Award Winning",
      desc: "Recognized with a Unit Head Award for UI Excellence at Ericsson."
    },
    {
      icon: <Zap className="text-secondary-light" size={24} />,
      title: "Performance Focus",
      desc: "Expert in optimization using Dynatrace and Azure Monitor."
    },
    {
      icon: <Server className="text-purple-400" size={24} />,
      title: "Full Stack",
      desc: "Architecting scalable APIs with GraphQL, REST, and Node.js."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-dark-muted text-lg"
          >
            <p>
              I am a Software Developer with 3 years of experience specializing in the JavaScript ecosystem, specifically React.js, Node.js, and NestJS.
            </p>
            <p>
              Currently at Ericsson, I have a proven track record of engineering production-ready enterprise frontends and architecting scalable backend APIs. I am passionate about performance optimization, actively leading Generative AI initiatives and hackathons.
            </p>
            <p>
              Beyond coding, I enjoy technical blogging, playing guitar, fine art (B.Fine), and singing (B.Mus).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-text mb-2">{item.title}</h3>
                <p className="text-dark-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
