import { motion } from "framer-motion";

export default function HeroSection({setActiveTab}: {setActiveTab: (val: string) => void}) {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-600 h-full text-white flex items-center">
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Aravind Pandit
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-200 font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Senior Frontend Engineer
          </motion.h2>

          <motion.p
            className="text-xl text-gray-100 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building exceptional user experiences with modern web technologies.
            Specializing in React ecosystem, frontend architecture, and UI/UX
            optimization.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#contact"
              onClick={() => setActiveTab("contact")}
              className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transform hover:-translate-y-1 transition duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={() => setActiveTab("projects")}
              className="px-8 py-3 bg-transparent shadow-lg border-2 border-white text-white font-semibold rounded-lg hover:bg-opacity-10 transform hover:-translate-y-1 transition duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
