import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Database } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home-section"
      className="relative mx-auto flex max-w-5xl flex-col items-start gap-10 px-4 py-16 sm:py-20 sm:px-6 lg:flex-row lg:items-center lg:py-24"
    >
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/3 bg-gradient-to-bl from-navy/5 via-navy-accent/10 to-transparent lg:block" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex-1 space-y-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
          Data Analyst
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
          Prithu Verma{" "}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-text/80 sm:text-base">
          Data Analyst | Python | SQL | Machine Learning | Power BI | Pandas | NumPy | Scikit-learn
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-text/80 sm:text-base">
          I design analytical solutions that translate complex datasets into
          clear, actionable insights for product, finance, and operations teams.
          My work focuses on building trustworthy data pipelines, robust
          dashboards, and concise narratives that drive measurable business
          outcomes.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-background shadow-sm transition hover:bg-navy-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="socials"
            smooth
            duration={500}
            offset={-80}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-navy/20 bg-background px-5 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:border-navy hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-6 grid gap-4 text-xs text-text/70 sm:grid-cols-3">
          <div className="flex items-start gap-2">
            <BarChart3 className="mt-0.5 h-4 w-4 text-navy" />
            <p>
              End-to-end analysis from data extraction and cleaning to
              executive-ready summaries.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Database className="mt-0.5 h-4 w-4 text-navy" />
            <p>SQL-first mindset with scalable data models optimized for BI.</p>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 text-navy" />
            <p>Comfortable collaborating with engineering, product, and finance.</p>
          </div>
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-4 flex flex-1 justify-center lg:mt-0"
        aria-hidden="true"
      >
        <div className="relative h-40 w-40 rounded-3xl bg-navy/95 shadow-xl shadow-navy/20 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
          <div className="absolute -left-6 -top-6 h-10 w-10 rounded-2xl border border-navy/10 bg-background/80 backdrop-blur" />
          <div className="absolute -right-4 bottom-4 h-16 w-16 rounded-2xl border border-navy/10 bg-navy-accent/90" />
          <div className="absolute inset-4 rounded-2xl border border-background/10 bg-gradient-to-br from-background/5 to-navy-accent/60" />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;

