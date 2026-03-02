import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-navy/10 bg-background/95">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-text/60 sm:flex-row sm:px-6">
        <p>© 2026 Prithu Verma. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="font-medium text-navy">
            React, Vite, Tailwind CSS & Framer Motion
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

