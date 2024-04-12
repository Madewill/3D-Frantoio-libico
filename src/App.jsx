import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Planting from "./components/Planting";
import Growing from "./components/Growing";
import Harvesting from "./components/Harvesting";
import Crushing from "./components/Crushing";
import ColdPressing from "./components/ColdPressing";
import Bottling from "./components/Bottling";
import Products from "./components/Products";
import Footer from "./components/Footer";
import StarsCanvas from "./components/canvas/Stars";


const App = () => {
  const [language, setLanguage] = useState('english');
  const [loadingProgress, setLoadingProgress] = useState(0);

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'arabic' : 'english');
  };

  useEffect(() => {
    const totalItems = 10; // Total number of items to load (adjust as needed)
    let loadedItems = 0; // Counter for loaded items

    const updateProgress = () => {
      loadedItems++;
      const progress = Math.floor((loadedItems / totalItems) * 100);
      setLoadingProgress(progress);
    };

    // Simulating loading of items (replace this with actual loading logic)
    const loadingInterval = setInterval(updateProgress, 500);

    // Clean up the interval and show the content when loading is complete
    if (loadedItems === totalItems) {
      clearInterval(loadingInterval);
    }

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <>
      {loadingProgress < 100 && (
        <div className="loader">
          <span>{loadingProgress}%</span>
        </div>
      )}

      <div className="languages absolute top-10 right-[135px] z-10">
        <img className="menu w-[25px] h-[25px]" src="./assets/images/menu.svg" alt="Menu" />
        <button
          className={`button ${language === 'arabic' ? 'active' : ''}`}
          onClick={toggleLanguage}
        >
          AR
        </button>
        <span className="partition"></span>
        <button
          className={`button ${language === 'english' ? 'active' : ''}`}
          onClick={toggleLanguage}
        >
          EN
        </button>
      </div>

      <Hero language={language} />

      <div className="relative z-0">
      <Planting language={language} />
      <Growing language={language} />
      <Harvesting language={language} />
      <Crushing language={language} />
      <ColdPressing language={language} />
      <Bottling language={language} />
      <Products language={language} />
      <Footer language={language} />
      {/* <StarsCanvas /> */}
      </div>
    </>
  );
};

export default App;
