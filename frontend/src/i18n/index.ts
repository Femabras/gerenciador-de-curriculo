import en from "./en";
import pt from "./pt";

// Simple translation getter: no heavy i18next dependency for now
export const t = (lang: "en" | "pt", key: keyof typeof en) => {
  return lang === "en" ? en[key] : pt[key];
};
