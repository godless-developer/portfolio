"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className=" flex flex-col gap-10 w-full h-[400px] justify-center bg-amber-800"
      // style={{
      //   backgroundImage:
      //     'url("https://e0.pxfuel.com/wallpapers/348/871/desktop-wallpaper-honeycomb-red-and-black-honeycomb.jpg")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-pink-500">Hello!</span> I'm a
              <span className="relative inline-block">
                <span className="relative z-10">Fullstack Dev</span>
                <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-yellow-300 opacity-50"></span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build cool stuff for the web with modern technologies.
            <br />
            Let's create something awesome together!
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* <Button size="lg" className="group">
              View my work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </motion.div>
        </div>
      </div>

      <div className=" bottom-5 left-1/2 -translate-x-1/2">
        <Sparkles className="h-6 w-6 text-pink-500 animate-pulse" />
      </div>
    </div>
  );
}
