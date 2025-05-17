import { motion } from "framer-motion";

export default function HeroSection({ setActiveTab }: { setActiveTab: (val: string) => void }) {
  return (
    <section className="bg-gradient-to-r form-blue-800 to-blue-600 min-h-screen text-white flex items-center">
      <div className="container mx-auto px-4 sm:px-6 py-20 md:py-24 relative z-10">
        <motion.div
          className="w-full md:w-3/4 lg:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Aravind Pandit
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Senior Frontend Engineer
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I&apos;m a Senior Frontend Engineer specializing in building scalable, high-performance web applications. With a passion for clean code, pixel-perfect UI, and intuitive user experiences, I transform ideas into reliable digital products. I focus on React, Next.js, TypeScript, and modern web technologies.
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
              className="px-6 sm:px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-lg hover:bg-indigo-50 transform hover:-translate-y-1 transition duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={() => setActiveTab("projects")}
              className="px-6 sm:px-8 py-3 bg-transparent shadow-lg border-2 border-white text-white font-semibold rounded-lg hover:bg-opacity-10 transform hover:-translate-y-1 transition duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}