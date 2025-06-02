"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/common.json";
import translationMN from "./locales/mn/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    mn: { translation: translationMN },
  },
  lng: "en",
  fallbackLng: "mn",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
