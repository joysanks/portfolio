import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Redux", "Recoil", "Context API", "Tailwind CSS", "Material UI", "Bootstrap", "HTML5", "CSS3"]
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Express.js", "NestJS", "MongoDB", "SQL", "REST APIs", "GraphQL", "Microservices", "Docker"]
    },
    {
      title: "Languages & Observability",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "Dynatrace", "Azure Monitor", "Git"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    className="bg-white/5 border border-white/10 text-dark-muted px-4 py-2 rounded-full text-sm hover:border-primary-light hover:text-primary-light transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
