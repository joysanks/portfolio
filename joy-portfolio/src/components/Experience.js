import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Ericsson",
      role: "Software Developer",
      period: "July 2023 - Present",
      location: "Bengaluru, India",
      achievements: [
        "Built and deployed production-grade frontends for internal platforms using React.js and Ericsson Design System, integrating REST and GraphQL APIs for real-time UI experiences.",
        "Optimized performance using Dynatrace and Azure Monitor.",
        "Contributed to backend development by creating APIs in Nest.js, managing SQL and NoSQL database queries, and handling deployments through Azure CI/CD pipelines.",
        "Collaborated with the Gen AI team to enhance internal tools using Generative AI.",
        "Recognized with an 'Exceeding Expectations' rating and Unit Head Award for UI Excellence.",
        "Helped organize the Ericsson GSD Gen-AI Hackathon (2024, 2025) and showcased an in-house platform at Smartathon 2025."
      ]
    },
    {
      company: "Photoshooto",
      role: "Web Developer Intern",
      period: "May 2022 - July 2022",
      location: "Remote",
      achievements: [
        "Built responsive React components for core booking and payment workflows, ensuring cross-browser compatibility and mobile responsiveness.",
        "Standardized CSS modules and reusable UI patterns to reduce codebase redundancy and improve maintainability."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-bg/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-bg bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-primary/20">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-dark-text">{exp.role}</h3>
                    <div className="text-primary-light font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm text-dark-muted mt-2 sm:mt-0 bg-white/5 px-3 py-1 rounded-full">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-dark-muted text-sm flex items-start">
                      <span className="text-secondary-light mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
