import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Business Analysis Visuals",
    description:
      "Created a collection of Power BI dashboards to visualize business performance and insights for a B2B SaaS product.",
    tech: ["Power BI","SQL","Python","Pandas","NumPy","scikit-learn"],
    github: "https://github.com/PrithuVerma/Business-Analysis-Visuals",
    demo: "#"
  },
  {
    title: "Exploratory Data Analysis",
    description:
      "Performed exploratory data analysis on a dataset to gain insights and understand the data.",
    tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    github: "https://github.com/PrithuVerma/Exploratory-Data-Analysis",
    demo: "#"
  },
  {
    title: "Machine Learning Foundation",
    description:
      "Built a machine learning model to predict customer churn and identify key drivers for customer success and marketing teams.",
    tech: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-learn", "Google Colab"],
    github: "https://github.com/PrithuVerma/Machine_Learning_Foundation",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section
      id="projects-section"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mb-8">
        <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">
          Projects
        </h2>
        <p className="mt-1 text-sm text-text/70">
          Selected work that shows how I approach data, modeling, and
          communication.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="flex flex-col rounded-2xl border border-navy/10 bg-white/80 p-4 shadow-sm shadow-navy/5 transition-transform"
          >
            <h3 className="text-sm font-semibold text-navy sm:text-base">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-xs text-text/75 sm:text-sm">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-navy"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy/20 bg-background px-3 py-1.5 text-xs font-medium text-navy transition hover:border-navy hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
              <a
                href={project.demo}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-navy/10 bg-navy px-3 py-1.5 text-xs font-medium text-background transition hover:bg-navy-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                aria-label={`Open live demo of ${project.title}`}
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

