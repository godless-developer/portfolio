import { CodeXml, Github, Linkedin, Mail, Zap } from "lucide-react";
import Link from "next/link";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skilss";
import ProjectsSection from "./components/Project";
import ContactSection from "./components/Contacts";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-full  bg-white">
      <header className="sticky top-0 z-40 w-[100%] border-b bg-white/80 backdrop-blur-[7px] flex justify-center">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <CodeXml color="#f443d4" />
            <span className="font-mono text-xl font-bold">Tuk</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-pink-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-pink-500 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-pink-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-pink-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-gray-600 hover:text-pink-500 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-pink-500 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button size="sm" className="hidden md:flex">
              <Mail className="mr-2 h-4 w-4" />
              Say Hello
            </Button>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center relative justify-center w-full">
        <Link
          href="#contact"
          className="text-sm font-semibold leading-6 backdrop-blur-[7px] bg-gray-100 py-2 px-3 rounded-xl top-20 right-10 text-gray-900 hover:text-pink-500 transition-colors fixed "
        >
          Contact me <span aria-hidden="true">→</span>
        </Link>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t py-6 md:py-0 flex justify-center">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            Built with <span className="text-pink-500">♥</span> using Next.js
            and Tailwind CSS
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/godless-developer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
