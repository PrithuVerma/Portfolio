import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  DatabaseZap,
  Brain,
  Settings2,
  TerminalSquare
} from "lucide-react";

const categories = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "SQL"]
  },
  {
    title: "Data & ML",
    icon: Brain,
    items: ["Pandas", "NumPy", "Scikit-learn","Power BI"]
  },
  {
    title: "Databases",
    icon: DatabaseZap,
    items: ["MySQL", "SQLite"]
  },
  {
    title: "Tools",
    icon: Settings2,
    items: ["Git", "Jupyter"]
  }
];

const TechStack = () => {
  return (
    <section
      id="tech-stack-section"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            Tech Stack
          </h2>
          <p className="mt-1 text-sm text-text/70">
            Tools I use to move from raw data to reliable decisions.
          </p>
        </div>
        <TerminalSquare className="hidden h-6 w-6 text-navy/60 sm:block" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-navy/10 bg-white/70 p-5 shadow-sm shadow-navy/5"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold text-navy">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;

