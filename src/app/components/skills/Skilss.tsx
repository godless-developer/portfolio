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
import { useTranslation } from "react-i18next";
import ShinyText from "@/app/Bits/ShinyText";

const SkillsSection = () => {
  const { t } = useTranslation();

  const frontendSkills = [
    {
      name: "React",
      icon: <Braces className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      percentage: 78,
    },
    {
      name: "Next.js",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-600",
      percentage: 71,
    },
    {
      name: "TypeScript",
      icon: <Braces className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      percentage: 82,
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-cyan-100 text-cyan-600",
      percentage: 98,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <Server className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
      percentage: 72,
    },
    {
      name: "Express",
      icon: <Server className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-600",
      percentage: 72,
    },
    {
      name: "MongoDB",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
      percentage: 86,
    },
    {
      name: "PostgreSQL",
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      percentage: 78,
    },
  ];

  const otherSkills = [
    {
      name: "Git",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600",
      percentage: 81,
    },
    {
      name: "AI",
      icon: <SplinePointer color="#dd08b6" className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      percentage: 75,
    },
    {
      name: "Responsive",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      percentage: 93,
    },
    {
      name: "UI/UX",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-600",
      percentage: 86,
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
    <motion.section
      id="skills"
      className="pt-44 md:w-full absolute px-6 z-10 top-[2200px] md:top-[1790px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          key={t("MyToolbox")}
        >
          <h2 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span>{t("MyToolbox")}</span>
            <span className="block h-1.5 w-20 bg-orange-700 mx-auto mt-2"></span>
          </h2>
          <div className="mt-4 text-lg text-gray-400">
            <ShinyText
              text={t("myskillshere")}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:px-[20%]"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-bold mb-10 text-center font-mono"
            key={t("frontend")}
          >
            {t("frontend")}
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 h-[400px] md:h-full"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-56 md:px-[20%]"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-bold mb-10 text-center font-mono"
            key={t("backend")}
          >
            {t("backend")}
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 h-[400px] md:h-full"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </motion.div>
        </motion.div>

        {/* Other skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-56 md:px-[20%]"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-bold mb-10 text-center font-mono"
            key={t("otherskills")}
          >
            {t("otherskills")}
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 h-[400px] md:h-full"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {otherSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
