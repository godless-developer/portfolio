"use client";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "mn" ? "en" : "mn";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="p-2 text-sm cursor-pointer">
      {i18n.language === "mn" ? (
        <div className="hover:text-orange-700">
          <Globe />
        </div>
      ) : (
        <div className="hover:text-orange-700">MN</div>
      )}
    </button>
  );
}
