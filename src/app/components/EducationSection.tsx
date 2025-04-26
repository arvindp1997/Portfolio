import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

export default function EducationSection() {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "IIIT Bhubaneswar",
      year: "July 2020",
      location: "Bhubaneswar, Odisha",
      score: "7.42 CGPA",
    },
    {
      degree: "12th CBSE Board",
      institution: "KV AFS Ojhar, Nashik",
      year: "July 2015",
      location: "Maharashtra, India",
      score: "86.6%",
    },
    {
      degree: "10th CBSE Board",
      institution: "KV AFS Ojhar, Nashik",
      year: "July 2013",
      location: "Maharashtra, India",
      score: "9.4 CGPA",
    },
  ];

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
    <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-4 h-full">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Education</h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <EducationCard education={edu} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
