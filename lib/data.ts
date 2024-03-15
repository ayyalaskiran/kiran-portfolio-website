import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import heatmapImg from "@/public/heatmap.png"
import webrtcImg from "@/public/webrtc.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front End Developer",
    company: "Dotball Interactive",
    location: "Bengaluru, India",
    description:
      "Developed landing pages with HTML5/CSS3 based on Figma designs.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Software Engineer",
    company: "Mordor Intelligence",
    location: "Hyderabad, India",
    description:
      "I worked as a front-end developer for 3 years developing Single Page Applications with React, Redux and NextJS. Also dabbled into backend development with ExpressJS and MondoDB.",
    icon: React.createElement(FaReact),
    date: "2019 - 2022",
  },
  {
    title: "Software Engineer 1",
    company: "Dun and Bradstreet",
    location: "Hyderabad, India",
    description:
      "Been working here since past 2 years in front end development with React, Typescript, Redux Roolkit and D3.js.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Real-Time Webcam Photo Booth",
    description:
      "This is a simple web app that allows users to take photos using their webcam in real-time.",
    tags: ["React", "Next.js"],
    imageUrl: webrtcImg,
    demo_link: "https://web-rtc-real-time-webcam-photo-booth.vercel.app"
  },
  {
    title: "Crypto Heat Map",
    description:
      "Crypto heat map visually represents the performance of various cryptocurrencies within a specified time frame. It pulls the data from CoinGecko API.",
    tags: ["React", "Material UI"],
    imageUrl: heatmapImg,
    demo_link: "https://crypto-heat-map.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "MongoDB",
  "Redux",
  "Webpack",
  "Jest/RTL",
  "Docker"
] as const;
