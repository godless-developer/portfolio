import { motion } from "framer-motion";
import {
  Braces,
  Database,
  Globe,
  Layers,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  SplinePointer,
} from "lucide-react";
import SkillCard from "./SkillCards";

const SkillsSection = () => {
  const frontendSkills = [
    {
      name: "React",
      icon: <Braces className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      percentage: 85,
    },
    {
      name: "Next.js",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-600",
      percentage: 80,
    },
    {
      name: "TypeScript",
      icon: <Braces className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      percentage: 90,
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-cyan-100 text-cyan-600",
      percentage: 100,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <Server className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
      percentage: 75,
    },
    {
      name: "Express",
      icon: <Server className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-600",
      percentage: 77,
    },
    {
      name: "MongoDB",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
      percentage: 91,
    },
    {
      name: "PostgreSQL",
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      percentage: 82,
    },
  ];

  const otherSkills = [
    {
      name: "Git",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600",
      percentage: 93,
    },
    {
      name: "AI",
      icon: <SplinePointer color="#dd08b6" className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      percentage: 98,
    },
    {
      name: "Responsive",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      percentage: 100,
    },
    {
      name: "UI/UX",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-600",
      percentage: 90,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className=" pt-44 md:w-full absolute z-10 top-[1750px] md:top-[1790px]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Toolbox
            <span className="block h-1.5 w-20 bg-orange-700 mx-auto mt-2"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Here are some of the technologies and tools I work with
          </p>
        </motion.div>

        <div className="md:px-[20%]">
          <h3 className="text-xl font-bold mb-10 text-center font-mono">
            Frontend
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 h-[400px] md:h-full"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} percentage={80} />
            ))}
          </motion.div>
        </div>

        <div className="mt-32 md:mt-56 md:px-[20%]">
          <h3 className="text-xl font-bold mb-10 text-center font-mono">
            Backend
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 h-[400px] md:h-full"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} percentage={80} />
            ))}
          </motion.div>
        </div>

        <div className="mt-32 md:mt-56 md:px-[20%] ">
          <h3 className="text-xl font-bold mb-10 text-center font-mono">
            Other Skills
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 h-[400px] md:h-full"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {otherSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} percentage={80} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
