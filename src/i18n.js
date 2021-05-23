import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import pagesTC from './assets/locale/tc/pages.json';
import pagesSC from './assets/locale/sc/pages.json';
import pagesEN from './assets/locale/en/pages.json';

const DETECTION_OPTIONS = {
  order: ['path'],
  //caches: ['localStorage']
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: DETECTION_OPTIONS,
    resources: {
      tc: pagesTC,
      sc: pagesSC,
      en: pagesEN
    },
    fallbackLng: "tc",
    debug: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
