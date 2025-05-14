"use client";
import { CodeXml, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import HeroSection from "./Hero";
import AboutSection from "./About";
import ProjectsSection from "./Project";
import ContactMe from "./ContactMe";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Image from "next/image";
import { MenuBar } from "./Menubar";
import SkillsSection from "./Skilss";

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
          <nav className="hidden md:flex gap-14 ml-10">
            <MenuBar />
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <main className="relative w-full">
        <Image
          src={"/pfbr.png"}
          width={20000}
          height={20000}
          alt="bg"
          className="w-full h-screen object-cover bg-center z-0 fixed"
        ></Image>
        <div className="absolute z-10 backdrop-blur-[20px] flex flex-col items-center  justify-center w-full h-[7220px] md:h-[5440px]">
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
