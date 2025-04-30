"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const uploadImage = async (file: File | null) => {
  if (!file) {
    return null;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    return result.secure_url;
  } catch (error: unknown) {
    return { error: "failed to upload image" };
  }
};

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [file, setFile] = useState<any>(null);
  const [img, setImg] = useState<any>(null);

  const onFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setImg(URL.createObjectURL(file));
    }
  };

  const projects = [
    {
      title: "Viducate",
      description:
        "Location-based weather app with 7-day forecasts and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "OpenWeather API", "Geolocation"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Food Delivery",
      description:
        "Collaborative task manager with real-time updates and team features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather App",
      description:
        "A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.",
      image: "/projectWeather.png",
      tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      demoUrl: "https://weather-app-tukka.vercel.app/",
      githubUrl: "https://github.com/godless-developer/weather-app",
    },
    {
      title: "Movie App",
      description:
        "Analytics dashboard for social media accounts with real-time data visualization.",
      image: "/projectMovie.png",
      tags: ["React", "D3.js", "Node.js", "Express"],
      demoUrl: "https://movie-tuka.vercel.app/",
      githubUrl: "https://github.com/godless-developer/movie-z",
    },
  ];

  return (
    <section id="projects" className="py-20 ">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="font-mono text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
            <span className="block h-1.5 w-20 bg-pink-500 mx-auto mt-2"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out some of my recent work and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden border-2 border-gray-100 transition-all duration-300 hover:border-pink-300 hover:shadow-lg hover:scale-105 hover:transform-view cursor-pointer">
                <div className="relative overflow-hidden">
                  <div
                    className="aspect-video w-full bg-gray-100 object-cover transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform:
                        hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-6">
                    <div className="flex gap-4">
                      <Button size="sm" variant="default" asChild>
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Live Demo
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20"
                        asChild
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="mr-1 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-mono text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="h-[130px] relative overflow-scroll scroll-bar-none ">
                    {project.description}
                    <div className="sticky bottom-0 left-[44%] flex items-center justify-center z-0">
                      <ChevronDown />
                    </div>
                  </CardDescription>
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  ></div>
                </CardHeader>

                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
