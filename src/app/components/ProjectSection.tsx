import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Content Management System",
      description:
        "Built a custom CMS similar to Contentful for Bravo Savings Network, enabling teams to manage deals and merchant data with 70% reduction in manual overhead.",
      tech: ["React", "TypeScript", "Apollo GraphQL", "Tailwind CSS"],
      demoLink: "https://www.bravo-savings-network.com/",
      codeLink: "https://www.bravo-savings-network.com/",
    },
    {
      title: "Tiptap Micro-Frontend Editor",
      description:
        "Enhanced and maintained a rich text editor as a micro-frontend that can be embedded in host applications for enterprise clients.",
      tech: ["React", "TypeScript", "MFE", "Jest", "Cypress"],
      demoLink: "https://www.simpplr.com/",
      codeLink: "https://www.simpplr.com/",
    },
    {
      title: "Interactive Dashboard",
      description:
        "Developed data visualization dashboard for Johnson Controls featuring various chart types to present insights from building equipment datasets.",
      tech: ["React", "Chart.js", "Recharts", "Node.js", "MongoDB"],
      demoLink: "https://www.johnsoncontrols.com/",
      codeLink: "https://www.johnsoncontrols.com/",
    },
    {
      title: "Web Admin Portal",
      description:
        "Created a comprehensive B2B admin portal for Launch My Career with features like user management, licensing, and advanced dashboards.",
      tech: ["React", "Redux", "Next.js", "SCSS", "Storybook"],
      demoLink: "#",
      codeLink: "#",
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
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 p-4">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-50 max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and
            problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
