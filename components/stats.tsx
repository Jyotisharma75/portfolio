"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Zap, Target } from "lucide-react";

export function Stats() {
  const stats = [
    {
      value: "4+",
      label: "Years Experience",
      icon: Target,
    },
    {
      value: "10+",
      label: "AI Projects Delivered",
      icon: Brain,
    },
    {
      value: "1500+",
      label: "Hours Automated",
      icon: Zap,
    },
    {
      value: "50+",
      label: "Organizations Supported",
      icon: Code2,
    },
    {
      value: "$125K+",
      label: "Annual Cost Savings Generated",
      icon: Zap,
    },
    {
      value: "99.9%",
      label: "System Availability",
      icon: Target,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
