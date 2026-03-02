import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, BarChart3 } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/PrithuVerma",
    icon: Github
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prithuverma/",
    icon: Linkedin
  },
  {
    label: "Email",
    href: "mailto:prithuverma005@gmail.com",
    icon: Mail
  },
  {
    label: "Kaggle",
    href: "https://www.kaggle.com/lamskdna",
    icon: BarChart3
  }
];

const Socials = () => {
  return (
    <section
      id="socials-section"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center"
      >
        <h2 className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">
          Socials
        </h2>
        <p className="mt-2 text-sm text-text/70">
          Open to data analyst roles, consulting projects, and collaboration on
          impactful analytics work.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? "_self" : "_blank"}
                rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white/80 text-navy shadow-sm shadow-navy/5 transition hover:border-navy hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Socials;

