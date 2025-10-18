import React from "react";

type MainLayoutProps = {
  children: React.ReactNode; // ReactNode covers anything renderable (text, elements, fragments)
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Tailwind classes: flexbox, full height, centered content, light background
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      {children}
    </div>
  );
};

export default MainLayout;
