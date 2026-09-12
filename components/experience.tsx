"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Badge } from "lucide-react";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="group relative glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-8 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.position}</h3>
                    <p className="text-lg text-purple-400 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.duration}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-purple-300">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.slice(0, 4).map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-purple-400 flex-shrink-0 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.achievements.length > 4 && (
                    <p className="text-sm text-purple-400 mt-2">
                      +{exp.achievements.length - 4} more achievements
                    </p>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
