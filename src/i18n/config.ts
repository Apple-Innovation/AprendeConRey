import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enGB from "./locales/en-GB.json";
import esES from "./locales/es-ES.json";

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    // lng: 'en', // we are using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      "en-GB": { translation: enGB },
      "es-ES": { translation: esES },
    },
    fallbackLng: "es-ES",
  });

export default i18n;
