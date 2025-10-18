import React from "react";

interface LanguageSwitcherProps {
  language: "en" | "pt";
  toggleLanguage: () => void;
}

// A controlled component — behavior fully driven by props (no internal state)
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  toggleLanguage,
}) => {
  return (
    <button
      onClick={toggleLanguage}
      className="absolute top-6 right-6 px-3 py-1 text-sm bg-gray-800 text-white rounded-md"
    >
      {language === "en" ? "PT" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
