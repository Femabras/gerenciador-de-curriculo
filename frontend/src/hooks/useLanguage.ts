import { useState } from "react";

// Local hook manages language switching
// Using union type ("en" | "pt") instead of string for type safety
export const useLanguage = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));

  return { language, toggleLanguage };
};
