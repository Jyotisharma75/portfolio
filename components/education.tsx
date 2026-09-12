"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/education";
import { Award, BookOpen } from "lucide-react";

export function Education() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-purple-400" />
              Education
            </h3>

            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-purple-400 font-semibold mt-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.field}</p>
                    <p className="text-xs text-muted-foreground mt-2">Graduated: {edu.graduationYear}</p>
                    {edu.details && (
                      <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-400" />
              Certifications
            </h3>

            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{cert.name}</h4>
                    <p className="text-purple-400 font-semibold mt-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-2">Issued: {cert.date}</p>
                    {cert.credentialUrl && (
                      <motion.a
                        whileHover={{ x: 2 }}
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 mt-3 transition-colors"
                      >
                        View Credential →
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
