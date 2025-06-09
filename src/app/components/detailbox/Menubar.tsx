"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, User2Icon, Sparkles, FolderKanban } from "lucide-react";
import { useTranslation } from "react-i18next";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <User2Icon className="h-5 w-5" />,
    label: "About",
    href: "#about",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    label: "Skills",
    href: "#skills",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <FolderKanban className="h-5 w-5" />,
    label: "Projects",
    href: "#projects",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Contact",
    href: "#contact",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
];

export function MenuBar() {
  const { t } = useTranslation();
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = item.href;
          }
        }
      });
      setActiveHref(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav className="p-[13px] rounded-2xl relative overflow-hidden">
      <ul className="flex items-center gap-12 relative z-10 px-8">
        {menuItems.map((item, index) => (
          <motion.li key={index} className="relative group">
            <motion.a
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              className="flex flex-col items-center justify-center text-white px-4 py-2 relative gap-1"
            >
              <motion.span
                key={t(item.label)}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                {t(item.label)}
              </motion.span>

              <motion.span
                className={`h-[1px] w-full bg-orange-700 origin-left transition-all duration-300 ease-in-out ${
                  activeHref === item.href ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
                style={{ transformOrigin: "left" }}
              />
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
