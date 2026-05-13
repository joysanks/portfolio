import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const projects = [
    {
      title: "GEN AI “Knowledge Weaver” Platform",
      description: "RAG-based Document Intelligence System. Built complete microfrontend UI with React.js and NestJS APIs. Features document upload flows, Monaco Editor integration, KPI dashboards, and role-based access.",
      tech: ["React.js", "NestJS", "RAG", "Microfrontends", "Monaco Editor", "MongoDB", "Microservices"],
      github: "https://github.com/joysanks",
      live: "#"
    },
    {
      title: "GSD ML Platform",
      description: "Unified three disjoint internal systems into a single React dashboard. Implemented complex state management using Recoil to handle large-scale data orchestration.",
      tech: ["React", "Recoil", "Tailwind CSS"],
      github: "https://github.com/joysanks",
      live: "#"
    },
    {
      title: "ASK ELI (GenAI Interface)",
      description: "Developed a real-time AI chat interface using React and GraphQL. Integrated with Ericsson's LLM API to facilitate low-latency, context-aware user interactions.",
      tech: ["React", "GraphQL", "LLM API"],
      github: "https://github.com/joysanks",
      live: "#"
    },
    {
      title: "GenPress",
      description: "Built a live, AI-powered news aggregator using React and NodeJS that fetches real-time search trends to dynamically generate sector-specific articles.",
      tech: ["React", "Node.js", "AI Integration"],
      github: "https://github.com/joysanks",
      live: "https://automated-news-react-frontend.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-primary/30"
            >
              <div className="h-48 bg-gradient-to-br from-dark-card to-dark-bg relative overflow-hidden flex items-center justify-center border-b border-white/5">
                {/* Decorative background for project image placeholder */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-dark-bg to-dark-bg"></div>
                <h3 className="text-2xl font-bold text-white/50 z-10">{project.title.substring(0, 2).toUpperCase()}</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text mb-2 group-hover:text-primary-light transition-colors">{project.title}</h3>
                <p className="text-dark-muted text-sm mb-6 h-20 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-secondary-light bg-secondary-light/10 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-dark-muted hover:text-white transition-colors">
                    <GithubIcon size={20} />
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-dark-muted hover:text-white transition-colors title='View Live Project'">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
