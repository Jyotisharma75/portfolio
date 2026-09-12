"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <div className="p-6 h-full flex flex-col space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-purple-400 mt-1">{project.description}</p>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Long Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {project.longDescription}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-purple-300 uppercase tracking-wide">Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-purple-400">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-4 border-t border-white/10">
                  {project.link && (
                    <motion.a
                      whileHover={{ x: 2 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors flex-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      whileHover={{ x: 2 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors flex-1"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
