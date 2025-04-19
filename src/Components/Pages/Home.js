import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import "./Home.css";
import MyPhoto from "../Assets/Images/My-Photo.png";
import MyPhoto2 from "../Assets/Images/My-Photo2.png";
import ResumePDF from "../Assets/Resume/Resume(VasoyaParth).pdf";

// Custom Hook for Intersection Observer
const useOnScreen = (options, elementId) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    const element = document.getElementById(elementId); // Target element
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options, elementId]);

  return isIntersecting;
};

const SkillBadge = ({ skill, progress }) => {
  return (
    <div className="badge-container">
      <span className="badge">{skill}</span>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

function Home() {
  // Intersection Observer for About Me section
  const isOnScreen = useOnScreen(
    {
      rootMargin: "0px",
      threshold: 0.5, // Trigger animation when 50% of the section is in view
    },
    "about-me"
  );

  // Intersection Observer for Skills section
  const isSkillsVisible = useOnScreen(
    {
      rootMargin: "0px",
      threshold: 0.5, // Trigger animation when 50% of the section is in view
    },
    "skills"
  );

  useEffect(() => {
    const typed = new Typed("#animated-roles", {
      strings: [
        "Web Developer",
        "Mobile App Developer",
        "UI/UX Designer",
        "Photographer",
        "Creative Technologist",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div>
      {/* Home Section */}
      <section className="home-section custom-hero flex items-center justify-center overflow-x-auto px-4 md:px-12 ">
        <div className="home-content grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto gap-10">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              I’m <span className="text-blue-600">Vasoya Parth</span>
            </h1>
            <h2 className="typed-text text-2xl font-medium text-gray-900 dark:text-gray-500">
              <span className="role" id="animated-roles"></span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0">
              I create and craft things on the web, on apps, and even behind the lens.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#about-me"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Let’s Work
              </motion.a>
              <motion.a
                href={ResumePDF}
                download="VasoyaParth_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Aligned Image */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={MyPhoto}
              alt="Vasoya Parth"
              className="photo-highlight-glow w-[320px] md:w-[420px] object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about-me"
        className={`about-me-section h-screen flex items-center px-4 md:px-12 ${isOnScreen ? "animate-section" : ""}`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* Left: Bigger Image without border */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            animate={isOnScreen ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1 }}
          >
            <img
              src={MyPhoto2}
              alt="Vasoya Parth"
              className="w-[320px] md:w-[420px] rounded-xl object-contain shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                filter:
                  "drop-shadow(0 0 20px rgba(100, 255, 255, 0.4)) drop-shadow(0 0 30px rgba(100, 255, 255, 0.2))",
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-6 text-center md:text-left max-w-2xl"
            initial={{ opacity: 0, x: 60 }}
            animate={isOnScreen ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
              <span className="glow-text">About Me</span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m <strong>Vasoya Parth</strong>, a developer crafting stunning interfaces & scalable backends with
              <code> React.js </code>,
              <code> Node.js </code>, and <code> Flutter. </code> From code to camera, I love blending creativity with logic.
            </p>

            <ul className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
              <li className="badge">React.js</li>
              <li className="badge">Node.js</li>
              <li className="badge">MongoDB</li>
              <li className="badge">Flutter</li>
              <li className="badge">Photo Editing</li>
              <li className="badge">Photography</li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-10">Career Objective</h3>
            <p className="text-md text-gray-700 dark:text-gray-300">
              To collaborate with dynamic teams and contribute to impactful projects using modern tools and creative problem-solving. Always growing, always building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`skills-section h-screen flex flex-col justify-center items-center px-4 md:px-12 py-8 ${isSkillsVisible ? "animate-section" : ""}`}
        style={{ background: "#ffffff" }} // Slight background color for differentiation
      >
        <motion.div
          className="text-left space-y-8 max-w-7xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="glow-text">My Skills</span>
          </h2>
          <p className="text-lg text-gray-900 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the key skills I've honed over time. I'm constantly learning and adapting to new technologies.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="skills-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-8">
          {/* Web Development */}
          <motion.div
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            animate={isSkillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Web Development</h3>
            <div className="skills-badges">
              <SkillBadge skill="HTML" progress={90} />
              <SkillBadge skill="CSS" progress={80} />
              <SkillBadge skill="JavaScript" progress={85} />
              <SkillBadge skill="React" progress={95} />
              <SkillBadge skill="Angular" progress={70} />
            </div>
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            animate={isSkillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Mobile Development</h3>
            <div className="skills-badges">
              <SkillBadge skill="Flutter" progress={85} />
              <SkillBadge skill="Android" progress={80} />
            </div>
          </motion.div>

          {/* Graphic Design */}
          <motion.div
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            animate={isSkillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Graphic Design</h3>
            <div className="skills-badges">
              <SkillBadge skill="Photoshop" progress={90} />
              <SkillBadge skill="Figma" progress={85} />
            </div>
          </motion.div>
           {/* Database Design */}
           <motion.div
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            animate={isSkillsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Database</h3>
            <div className="skills-badges">
              <SkillBadge skill="Sql Server" progress={90} />
              <SkillBadge skill="MongoDB" progress={85} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
