import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const skills = {
    languages: ["JavaScript", "TypeScript", "C++"],
    frontendTech: [
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "CSS Modules",
    ],
    stateManagement: ["Redux", "MobX", "Zustand", "Apollo GraphQL"],
    backendTech: ["Node.js", "Express", "MongoDB", "SQL"],
    testing: ["Jest", "Cypress", "Storybook"],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-[800px] p-4 bg-gradient-to-r from-gray-800 to-gray-600">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">
        Technical Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Languages", skills: skills.languages },
          { title: "Frontend Technologies", skills: skills.frontendTech },
          { title: "State Management", skills: skills.stateManagement },
          { title: "Testing Tools", skills: skills.testing },
          { title: "Backend Technologies", skills: skills.backendTech },
        ].map((section, index) => (
          <motion.div
            key={section.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <SkillCard
              title={section.title}
              skills={section.skills}
              bgClass="from-gray-900 to-gray-700"
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="md:w-2/3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">
              Professional Overview
            </h2>
            <p className="text-gray-50 leading-relaxed">
              A passionate Senior Frontend Engineer with 5+ years of experience
              building scalable web applications. Specialized in React ecosystem
              with strong expertise in TypeScript, modern state management
              solutions, and frontend architecture. Committed to crafting
              exceptional user experiences and solving complex problems with
              elegant solutions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
