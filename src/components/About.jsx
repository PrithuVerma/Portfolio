import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const About = () => {
  return (
    <section
      id="about-section"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-10 md:grid-cols-[auto,minmax(0,1fr)] md:items-center"
      >
        {/* <div className="flex justify-center md:justify-start">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-navy/10 bg-navy/5 sm:h-40 sm:w-40">
            <img
              src="Pfp.jpg"
              alt="/Users/neeraj/Desktop/Code/Portfolio/Pfp.jpg"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div> */}

        <div className="space-y-4 text-sm leading-relaxed text-text/80 sm:text-base">
          <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            About
          </h2>
          <p>
            I am a data analyst who enjoys turning unstructured data into clear,
            reliable insights that help teams move faster and with more
            confidence.
          </p>
          <p>
            My experience spans building analytical dashboards, designing SQL
            models, and delivering ad-hoc analysis for stakeholders across
            product, growth, and operations.
          </p>
          <p>
            I focus on clean data foundations, reproducible workflows, and
            transparent logic so that insights are easy to trust and easy to
            revisit.
          </p>
          <p>
            I am comfortable partnering with engineers and business leaders to
            define metrics, validate hypotheses, and prioritize the analyses
            that matter most.
          </p>
          <p>
            Outside of work, I regularly explore public datasets, participate in
            Kaggle challenges, and experiment with new ways to communicate
            complex findings in simple visual stories.
          </p>

          <div className="pt-2">
            <a
              href="Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-background px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-navy hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              aria-label="Download Prithu's resume"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

