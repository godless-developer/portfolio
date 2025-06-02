"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Buy Me Coffee",
      description:
        "Location-based weather app with 7-day forecasts and interactive maps.",
      image: "/projectCoffee.png?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      demoUrl: "https://buymecoffee-gilt.vercel.app",
      githubUrl: "https://github.com/orgs/Leap-2b/projects/8",
    },
    {
      title: "Viducate",
      description:
        "Collaborative task manager with real-time updates and team features.",
      image: "/projectViducate.png?height=400&width=600",
      tags: ["Google Cloud Translation API", "Youtube transcript", "Next.js"],
      demoUrl: "https://sorry-not-available/",
      class: "cursor-not-allowed",
      githubUrl: "https://github.com/orgs/Leap-2b/projects/8",
    },
    {
      title: "Food Delivery",
      description:
        "A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.",
      image: "/projectFoodDelivery.png",
      tags: ["React ", "OpenWeather API", "Geolocation"],
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
    {
      title: "Todo-list",
      description:
        "Location-based weather app with 7-day forecasts and interactive maps.",
      image: "/projectTodo.png?height=400&width=600",
      tags: ["React Native", "OpenWeather API", "Geolocation"],
      demoUrl: "https://todo-app-tukkaa.vercel.app/",
      githubUrl: "https://github.com/godless-developer/Todo-App",
    },
    {
      title: "Pinecone-Monorepo",
      description:
        "Collaborative task manager with real-time updates and team features.",
      image: "/projectPinecone.png?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      demoUrl: "#",
      class: "cursor-not-allowed",
      githubUrl: "https://github.com/pinecone-studio/pinecone-intern-monorepo",
    },
    {
      title: "Weather App",
      description:
        "A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.A full-featured online store with cart, checkout, and payment integration.",
      image: "/projectWeather.png",
      tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      demoUrl: "https://weather-app-tukka.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Movie App1",
      description:
        "Analytics dashboard for social media accounts with real-time data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "Node.js", "Express"],
      demoUrl: "https://weather-app-tukka.vercel.app/",
      githubUrl: "#",
    },
  ];
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="pb-20 pt-24 px-8 absolute z-10 top-960 md:top-740 animate-fade-in-up"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("recentProjects")}
            <span className="block h-1.5 w-20 bg-orange-700 mx-auto mt-2"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Check out some of my recent work
          </p>
        </motion.div>
        <Carousel className="bg-none h-[1000px]">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <div>
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {projects.slice(0, 4).map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className="overflow-hidden border-[0.5px] py-5 backdrop-blur-[12px] rounded-lg border-gray-100 transition-all duration-300 hover:border-pink-300 hover:shadow-lg hover:scale-105 hover:transform-view cursor-pointer">
                            <div className="relative overflow-hidden">
                              <div
                                className="aspect-video w-full object-cover transition-transform duration-500"
                                style={{
                                  backgroundImage: `url(${project.image})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  transform:
                                    hoveredIndex === index
                                      ? "scale(1.05)"
                                      : "scale(1)",
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-6">
                                <div className="flex gap-4">
                                  <Button
                                    size="sm"
                                    className={`${project.class}`}
                                    variant="default"
                                    asChild
                                  >
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
                              <CardTitle className="font-mono text-xl mt-2">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="h-[130px] relative overflow-scroll scroll-bar-none my-4 ">
                                {project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardFooter>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                  <Badge
                                    key={tagIndex}
                                    variant="secondary"
                                    className="bg-gray-100  hover:bg-gray-200 text-gray-800"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardFooter>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <div>
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {projects.slice(4, 8).map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className="overflow-hidden border-[0.5px] py-5 backdrop-blur-[12px] rounded-lg border-gray-100 transition-all duration-300 hover:border-pink-300 hover:shadow-lg hover:scale-105 hover:transform-view cursor-pointer">
                            <div className="relative overflow-hidden">
                              <div
                                className="aspect-video w-full object-cover transition-transform duration-500"
                                style={{
                                  backgroundImage: `url(${project.image})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  transform:
                                    hoveredIndex === index
                                      ? "scale(1.05)"
                                      : "scale(1)",
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end p-6">
                                <div className="flex gap-4">
                                  <Button
                                    size="sm"
                                    className={`${project.class}`}
                                    variant="default"
                                    asChild
                                  >
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
                              <CardDescription className="h-[130px] relative overflow-scroll scroll-bar-none my-4 ">
                                {project.description}
                                <div className="sticky bottom-0 left-[44%] flex items-center justify-center z-0">
                                  <ChevronDown />
                                </div>
                              </CardDescription>
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
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-7 cursor-pointer" variant={"ghost"} />
          <CarouselNext className="mr-7 cursor-pointer" variant={"ghost"} />
        </Carousel>
      </div>
    </section>
  );
};
export default ProjectsSection;
