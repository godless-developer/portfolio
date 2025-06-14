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
import { useTranslation } from "react-i18next";

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
        <div className="absolute z-10 backdrop-blur-[10px] flex flex-col items-center  justify-center w-full h-[7550px] md:h-[5440px]">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactMe />
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-20 bg-white/10 backdrop-blur-[7px] absolute md:top-1340 top-1890 z-10">
        <div className="container flex items-center justify-between w-full px-4">
          <p className="text-sm text-gray-400 ">
            © 2025 - {t("Built with heart , powered by soul")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/godless-developer"
              target="_blank"
              className="group flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-gray-400 group-hover:text-gray-600 transition duration-200"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.57.1.77-.25.77-.55v-2.02c-3.2.69-3.87-1.54-3.87-1.54-.52-1.34-1.26-1.7-1.26-1.7-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.3 1.17-3.12-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.88-.37 2.85-.37.97 0 1.94.13 2.85.37 2.19-1.5 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.82 1.17 1.86 1.17 3.12 0 4.44-2.68 5.42-5.24 5.7.42.37.77 1.1.77 2.21v3.27c0 .31.2.66.78.55A10.518 10.518 0 0 0 23.5 12C23.5 5.74 18.26.5 12 .5Z" />
              </svg>
              <span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600">
                {t("Github")}
              </span>
            </Link>
            <Link
              href="https://www.instagram.com/bt_tulgaagd?igsh=bnN3bTRxeXVpdjV1&utm_source=qr"
              target="_blank"
              className="group flex items-center gap-2"
            >
              <Image
                src="/instagram.png"
                alt="instagram"
                width={18}
                height={18}
                className="h-4 w-4 group-hover:opacity-70 transition"
              />
              <span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-pink-400">
                {t("Instagram")}
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
