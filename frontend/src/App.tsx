import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen bg-light-femabras text-deep-femabras bg-linear-to-br from-electric-blue to-midnight-green gap-6">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
