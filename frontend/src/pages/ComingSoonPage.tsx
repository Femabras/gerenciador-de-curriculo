import React from "react";
import LanguageSwitcher from "./../components/LanguageSwitcher";
import StatusIndicator from "./../components/StatusIndicator";
import { useLanguage } from "./../hooks/useLanguage";
import { t } from ".././i18n";

// Functional stateless component — no local state here, logic lives in custom hooks
const ComingSoonPage: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  // Keeping the page semantic: header (h1), paragraph (p)
  return (
    <div className="text-center px-4">
      <LanguageSwitcher language={language} toggleLanguage={toggleLanguage} />
      <StatusIndicator status="development" />
      <h1 className="text-3xl font-bold mt-6 mb-3">{t(language, "title")}</h1>
      <p className="text-lg text-gray-600">{t(language, "subtitle")}</p>
    </div>
  );
};

export default ComingSoonPage;
