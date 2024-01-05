import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../locales/en/translation.json";
import viTranslation from "../locales/vi/translation.json";

// Cấu hình i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation
    },
    vi: {
      translation: viTranslation
    }
  },
  lng: "en", // Ngôn ngữ mặc định
  fallbackLng: "en", // Ngôn ngữ dự phòng nếu ngôn ngữ hiện tại không có sẵn
  interpolation: {
    escapeValue: false // không escape các chuỗi đa ngôn ngữ
  }
});

export default i18n;