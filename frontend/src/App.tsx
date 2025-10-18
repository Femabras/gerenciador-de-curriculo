import React from "react";
import MainLayout from "./layouts/MainLayout";
import ComingSoonPage from "./pages/ComingSoonPage";

// React.FC (Function Component) is optional, but it provides prop type inference
// Using named imports clarifies component relationships (no magic defaults)
const App: React.FC = () => {
  return (
    <MainLayout>
      <ComingSoonPage />
    </MainLayout>
  );
};

export default App;
