import React from "react";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import headerImg from "../Assets/planet.jpg";

function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-4 md:mt-40 text-white" style={{ backgroundColor: "#131718", color: "white" }}>
      <motion.div
        className="md:w-1/2 p-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-2 mt-11"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hello There! I'm
        </motion.div>
        <motion.div
          className="uppercase font-bold text-2xl leading-10 tracking-wide"
          style={{ color: "#ffcc6c" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Rushikesh Shinde
        </motion.div>
        <motion.div
          className="font-thin text-base mt-4 m-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          I am a{" "}
          <ReactTypingEffect
            text={["Web Developer", "Java Developer", "Full Stack Developer"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            className="inline font-bold text-yellow-500"
          />
          . I excel in building robust applications, optimizing performance, and
          solving complex problems. Skilled in Spring Boot, RESTful APIs, Redux,
          and responsive design, I ensure seamless integration and functionality
          in all my projects.
        </motion.div>
        <motion.a
          href="mailto:rushishinde17292@gmail.com"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <button
            className="mb-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 mt-4 py-2 px-4 border-2 font-bold"
            style={{ borderColor: "#ffcc6c", color: "#ffcc6c" }}
          >
            Contact Me
          </button>
        </motion.a>
      </motion.div>

      <motion.div
        className="mt-20 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <img src={headerImg} alt="Profile" className="w-30 object-cover animate-bounceSlow" />
      </motion.div>
    </div>
  );
}

export default Header;
