"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Braces,
  Database,
  Globe,
  Layers,
  Palette,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";

export default function SkillsSection() {
  const frontendSkills = [
    {
      name: "React",
      icon: <Braces className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Next.js",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-600",
    },
    {
      name: "TypeScript",
      icon: <Braces className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <Server className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Express",
      icon: <Server className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-600",
    },
    {
      name: "MongoDB",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const otherSkills = [
    {
      name: "Git",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Docker",
      icon: <Layers className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "UI/UX",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-600",
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="font-mono text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Toolbox
            <span className="block h-1.5 w-20 bg-pink-500 mx-auto mt-2"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here are some of the technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-center font-mono">
              Frontend
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="border-2 border-gray-100 hover:border-pink-300 transition-all hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className={`p-3 rounded-full mb-4 ${skill.color}`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-medium">{skill.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center font-mono">
              Backend
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="border-2 border-gray-100 hover:border-pink-300 transition-all hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className={`p-3 rounded-full mb-4 ${skill.color}`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-medium">{skill.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center font-mono">
              Other Skills
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {otherSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="border-2 border-gray-100 hover:border-pink-300 transition-all hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className={`p-3 rounded-full mb-4 ${skill.color}`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-medium">{skill.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
