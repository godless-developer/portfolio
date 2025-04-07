"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Gamepad, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const interests = [
    { icon: <Code className="h-6 w-6" />, label: "Coding" },
    { icon: <Coffee className="h-6 w-6" />, label: "Coffee" },
    { icon: <Gamepad className="h-6 w-6" />, label: "Gaming" },
    { icon: <Music className="h-6 w-6" />, label: "Music" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="font-mono text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Me
            <span className="block h-1.5 w-20 bg-pink-500 mx-auto mt-2"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300">
                <img
                  src="https://res.cloudinary.com/dsvivujtj/image/upload/v1742527038/475382296_1577625612898681_4784807954650115116_n_bo2r7m.jpg"
                  alt="Developer portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-yellow-300 p-2">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                  <span className="font-mono text-xl font-bold">:)</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-mono">
              Hey there! I'm <span className="text-pink-500">Battulga</span>
            </h3>
            <p className="text-gray-600 mb-6">
              A passionate fullstack developer who loves creating beautiful and
              functional web applications. With a background in both frontend
              and backend technologies, I enjoy bringing ideas to life through
              clean code and intuitive user experiences.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me exploring new tech, playing
              video games, or enjoying a good cup of coffee. I believe in
              continuous learning and pushing the boundaries of what's possible
              on the web.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-pink-300 transition-colors"
                >
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="mb-2 text-pink-500">{interest.icon}</div>
                    <span className="text-sm font-medium">
                      {interest.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
