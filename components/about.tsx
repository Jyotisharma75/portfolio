"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap } from "lucide-react";

export function About() {
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
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: Brain,
      title: "Generative AI & LLMs",
      description: "Building AI solutions with LLMs, RAG systems, and Agentic AI",
    },
    {
      icon: Zap,
      title: "Production Systems",
      description: "Deploying scalable AI systems in enterprise environments",
    },
    {
      icon: CheckCircle2,
      title: "Enterprise Automation",
      description: "Creating intelligent automation for business processes",
    },
    {
      icon: Award,
      title: "Cloud Technologies",
      description: "Azure certified with extensive cloud deployment experience",
    },
  ];

  const skills = ["LLM Applications", "RAG Systems", "Agentic AI", "NLP", "Machine Learning", "Python", "FastAPI", "Azure"];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm an Applied AI Engineer with 3+ years of experience building scalable, production-grade
              AI solutions. My expertise spans from developing LLM applications and RAG systems to designing
              agentic AI workflows that automate complex business processes.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              At HCLTech, I've led the development of enterprise AI systems that process millions of data points,
              automate critical business operations, and generate significant cost savings. I specialize in
              turning complex AI concepts into tangible, revenue-generating solutions.
            </motion.p>

            {/* Highlights Grid */}
            <motion.div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-sm">{highlight.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Education
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-semibold">M.Tech Data Science</p>
                  <p className="text-sm text-muted-foreground">BITS Pilani</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-semibold">B.Tech Computer Science</p>
                  <p className="text-sm text-muted-foreground">GGSIPU</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                Certifications
              </h3>
              <div className="space-y-2">
                <p className="text-sm">✓ Azure Fundamentals (AZ-900)</p>
                <p className="text-sm">✓ Azure Data Fundamentals (DP-900)</p>
                <p className="text-sm">✓ Neo4j Certified Professional</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-bold mb-4">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm rounded-full bg-purple-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Import needed icon
import { Brain } from "lucide-react";
