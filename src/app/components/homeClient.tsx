"use client";
import { CodeXml } from "lucide-react";
import Link from "next/link";
import HeroSection from "./Hero";
import AboutSection from "./About";
import ProjectsSection from "./Project";
import ContactMe from "./ContactMe";
import LanguageSwitcher from "./detailbox/LanguageSwitcher";
import "../../i18n";
import Image from "next/image";
import { MenuBar } from "./detailbox/Menubar";
import SkillsSection from "./skills/Skilss";
import Audio from "./Audio";

export default function HomeClient() {
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
            <Audio />
          </div>
        </div>
      </header>
      <main className="relative w-full">
        <Image
          src={"/Tuk.png"}
          width={20000}
          height={20000}
          alt="bg"
          className="w-full h-screen object-cover bg-center z-0 fixed"
        ></Image>
        <div className="absolute z-10 backdrop-blur-[10px] flex flex-col items-center  justify-center w-full h-[7470px] md:h-[5440px]">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactMe />
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-20 bg-white/10 backdrop-blur-[7px] absolute md:top-1340 top-1865 z-10">
        <div className="container flex items-center justify-between w-full px-4">
          <p className="text-sm text-gray-400 ">
            © 2025 - Built with heart , powered by soul
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="https://github.com/godless-developer"
              target="_blank"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Github
            </Link>
            <Link
              href="https://www.facebook.com/battulgabatjargal.batuk"
              target="_blank"
              className="text-sm text-gray-400 hover:text-blue-600"
            >
              Facebook
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
