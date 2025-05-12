"use client";
import { CodeXml, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import HeroSection from "./Hero";
import AboutSection from "./About";
import SkillsSection from "./Skilss";
import ProjectsSection from "./Project";
import ContactMe from "./ContactMe";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function HomeClient() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen w-full  text-white">
      <header className="fixed top-0 z-40 w-[100%]  bg-white/10 backdrop-blur-[7px] flex justify-center">
        <div className="container flex h-16 items-center justify-between w-full px-10">
          <Link href="/" className="flex items-center gap-2">
            <CodeXml color="#CA3501" />
            <span className="font-mono text-xl font-bold">Tuk</span>
          </Link>
          <nav className="hidden md:flex gap-14">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-orange-700 transition-colors"
            >
              {t("About")}
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-orange-700 transition-colors"
            >
              {t("Skills")}
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-orange-700 transition-colors"
            >
              {t("Projects")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-orange-700 transition-colors"
            >
              {t("Contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                className="h-5 w-5 text-gray-600 hover:text-orange-700 transition-colors"
                strokeWidth={3}
              />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-blue-400 hover:text-orange-700 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <main className="relative w-full">
        <video
          autoPlay
          loop
          muted
          src="./portfolio2.mp4"
          className="w-full h-screen object-cover bg-center z-0 fixed"
        ></video>
        <div className="absolute z-10 backdrop-blur-[40px] flex flex-col items-center  justify-center w-full h-[6920px] md:h-[5440px]">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactMe />
        </div>
      </main>
    </div>
  );
}
