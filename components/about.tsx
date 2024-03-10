"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      5+ years of professional work experience in developing highly performant and pixel perfect single page applications with React, TypeScript, NextJS and NodeJS.
      </p>
      <p className="mb-3">
      Aside from my main interests, I also explore backend development, occasionally dabbling with Node.js, Express, and MongoDB.
      </p>
    </motion.section>
  );
}
