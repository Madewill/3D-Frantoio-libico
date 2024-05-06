import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Planting from './components/Planting';
import Growing from './components/Growing';
import Harvesting from './components/Harvesting';
import Crushing from './components/Crushing';
import ColdPressing from './components/ColdPressing';
import Bottling from './components/Bottling';
import Products from './components/Products';
import Footer from './components/Footer';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState('english');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: 'process', title: 'processes', arabicTitle: 'عمليات' },
    { id: 'products', title: 'products', arabicTitle: 'منتجات' },
    { id: 'contact', title: 'Contact', arabicTitle: 'اتصال' },
  ];

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
    const loadingInterval = setInterval(() => {
      updateProgress();
      if (loadedItems === totalItems) {
        clearInterval(loadingInterval);
        setIsLoaded(true); // Set isLoaded to true when loading is complete
      }
    }, 500);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          {loadingProgress < 100 && (
            <motion.div
              key="loader"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="loader"
            >
              <span>{loadingProgress}%</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="vid-overlay">
          <video className='videobg' src='../assets/images/background-vd.webm' loop muted autoPlay></video>
        </div>

        <div className="gradient">
          <div className="topGradient"></div>
          <div className="bottomGradient"></div>
        </div>

        <div className="languages absolute top-10 right-[135px] z-10">
          <div className="options">
            <AnimatePresence>
              {isLoaded && (
                <motion.ul
                  key="navLinks"
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 , delay: 1 }}
                  // transition={{ duration: 0.5, delay: 0.5 }}
                  className='list-none hidden sm:flex flex-row gap-10 items-center'
                >
                  {navLinks.map((link) => (
                    <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic-font' : 'english-font'} hover: cursor-pointer`}>
                      <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <img
            src={toggle ? "./assets/images/close.svg" : "./assets/images/menu.svg"}
            alt="menu"
            className='menu w-[25px] h-[25px] object-contain cursor-pointer md:hidden'
            onClick={() => setToggle(!toggle)}
          />
          
          <AnimatePresence>
           {isLoaded && (
                <motion.button
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 , delay: 1 }}
            className={`button ${language === 'arabic' ? 'active' : ''}`}
            onClick={toggleLanguage}
          >
            AR
          </motion.button>
            )}
          </AnimatePresence>

          <span className="partition"></span>

          <AnimatePresence>
          {isLoaded && (
                <motion.button
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8 , delay: 1 }}
            className={`button ${language === 'english' ? 'active' : ''}`}
            onClick={toggleLanguage}
          >
            EN
            </motion.button>
            )}
          </AnimatePresence>
        </div>

        {toggle && (
          <ul className="dropdown md:hidden">
            {navLinks.map((link) => (
              <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic-font' : 'ul-style'} hover:cursor-pointer`}>
                <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
              </li>
            ))}
          </ul>
        )}

        <Hero isLoaded={isLoaded} language={language} />

        <div className="relative z-0">
          <Planting language={language} />
          <Growing language={language} />
          <Harvesting language={language} />
          <Crushing language={language} />
          <ColdPressing language={language} />
          <Bottling language={language} />
          <Products language={language} />
          <Footer language={language} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;



//Backup before animating items in the app.jsx with the here
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import Hero from './components/Hero';
// import Planting from './components/Planting';
// import Growing from './components/Growing';
// import Harvesting from './components/Harvesting';
// import Crushing from './components/Crushing';
// import ColdPressing from './components/ColdPressing';
// import Bottling from './components/Bottling';
// import Products from './components/Products';
// import Footer from './components/Footer';

// const App = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [language, setLanguage] = useState('english');
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [toggle, setToggle] = useState(false);

//   const navLinks = [
//     { id: 'process', title: 'processes', arabicTitle: 'عمليات' },
//     { id: 'products', title: 'products', arabicTitle: 'منتجات' },
//     { id: 'contact', title: 'Contact', arabicTitle: 'اتصال' },
//   ];

//   const toggleLanguage = () => {
//     setLanguage(language === 'english' ? 'arabic' : 'english');
//   };

//   useEffect(() => {
//     const totalItems = 10; // Total number of items to load (adjust as needed)
//     let loadedItems = 0; // Counter for loaded items

//     const updateProgress = () => {
//       loadedItems++;
//       const progress = Math.floor((loadedItems / totalItems) * 100);
//       setLoadingProgress(progress);
//     };

//     // Simulating loading of items (replace this with actual loading logic)
//     const loadingInterval = setInterval(() => {
//       updateProgress();
//       if (loadedItems === totalItems) {
//         clearInterval(loadingInterval);
//         setIsLoaded(true); // Set isLoaded to true when loading is complete
//       }
//     }, 500);

//     return () => clearInterval(loadingInterval);
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         <AnimatePresence>
//           {loadingProgress < 100 && (
//             <motion.div
//               key="loader"
//               initial={{ y: '100%' }}
//               animate={{ y: 0 }}
//               exit={{ y: '-100%' }}
//               transition={{ duration: 0.5, ease: 'easeInOut' }}
//               className="loader"
//             >
//               <span>{loadingProgress}%</span>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <div className="vid-overlay">
//           <video className='videobg' src='../assets/images/background-vd.webm' loop muted autoPlay></video>
//         </div>

//         <div className="gradient">
//           <div className="topGradient"></div>
//           <div className="bottomGradient"></div>
//         </div>

//         <div className="languages absolute top-10 right-[135px] z-10">

//           <div className="options">

//             <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
//               {navLinks.map((link) => (
//                 <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic-font' : 'english-font'} hover: cursor-pointer`}>
//                   <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
//                 </li>
//               ))}
//             </ul>

//           </div>

//           <img
//             src={toggle ? "./assets/images/close.svg" : "./assets/images/menu.svg"}
//             alt="menu"
//             className='menu w-[25px] h-[25px] object-contain cursor-pointer md:hidden'
//             onClick={() => setToggle(!toggle)}
//           />

//           <button
//             className={`button ${language === 'arabic' ? 'active' : ''}`}
//             onClick={toggleLanguage}
//           >
//             AR
//           </button>
//           <span className="partition"></span>
//           <button
//             className={`button ${language === 'english' ? 'active' : ''}`}
//             onClick={toggleLanguage}
//           >
//             EN
//           </button>
//         </div>

//         {toggle && (
//           <ul className="dropdown md:hidden">
//             {navLinks.map((link) => (
//               <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic-font' : 'ul-style'} hover:cursor-pointer`}>
//                 <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
//               </li>
//             ))}
//           </ul>
//         )}

//         <Hero isLoaded={isLoaded} language={language} />

//         <div className="relative z-0">
//           <Planting language={language} />
//           <Growing language={language} />
//           <Harvesting language={language} />
//           <Crushing language={language} />
//           <ColdPressing language={language} />
//           <Bottling language={language} />
//           <Products language={language} />
//           <Footer language={language} />
//         </div>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

















//  main code

// import { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import Hero from "./components/Hero";
// import Planting from "./components/Planting";
// import Growing from "./components/Growing";
// import Harvesting from "./components/Harvesting";
// import Crushing from "./components/Crushing";
// import ColdPressing from "./components/ColdPressing";
// import Bottling from "./components/Bottling";
// import Products from "./components/Products";
// import Footer from "./components/Footer";




// const App = () => {

//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);

//   const navLinks = [
//     {
//       id: "process",
//       title: "processes",
//       arabicTitle: "عمليات",
//     },
//     {
//       id: "products",
//       title: "products",
//       arabicTitle: "منتجات",
//     },
//     {
//       id: "contact",
//       title: "Contact",
//       arabicTitle: "اتصال",
//     },
//   ];

//   const [language, setLanguage] = useState('english');
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   const toggleLanguage = () => {
//     setLanguage(language === 'english' ? 'arabic' : 'english');
//   };

//   useEffect(() => {
//     const totalItems = 10; // Total number of items to load (adjust as needed)
//     let loadedItems = 0; // Counter for loaded items

//     const updateProgress = () => {
//       loadedItems++;
//       const progress = Math.floor((loadedItems / totalItems) * 100);
//       setLoadingProgress(progress);
//     };

//     // Simulating loading of items (replace this with actual loading logic)
//     const loadingInterval = setInterval(updateProgress, 500);

//     // Clean up the interval and show the content when loading is complete
//     if (loadedItems === totalItems) {
//       clearInterval(loadingInterval);
//     }

//     return () => clearInterval(loadingInterval);
//   }, []);

//   return (
//     <>

//       <BrowserRouter>
//         {loadingProgress < 100 && (
//           <div className="loader">
//             <span>{loadingProgress}%</span>
//           </div>
//         )}

//         <div className="vid-overlay">
//           <video className='videobg' src='../assets/images/background-vd.webm' loop muted autoPlay></video>
//         </div>

//         <div className="gradient">
//           <div className="topGradient"></div>
//           <div className="bottomGradient"></div>
//         </div>

//         <div className="languages absolute top-10 right-[135px] z-10">

//           <div className="options">

//             <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
//               {navLinks.map((link) => (
//                 <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic-font' : 'english-font'}   hover: cursor-pointer`}>
//                   <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
//                 </li>
//               ))}
//             </ul>

//           </div>

//           <img
//                 src={toggle ? "./assets/images/close.svg" : "./assets/images/menu.svg"}
//                 alt="menu"
//                 className='menu w-[25px] h-[25px] object-contain cursor-pointer md:hidden'
//                 onClick={() => setToggle(!toggle)}
//             />

//           <button
//             className={`button ${language === 'arabic' ? 'active' : ''}`}
//             onClick={toggleLanguage}
//           >
//             AR
//           </button>
//           <span className="partition"></span>
//           <button
//             className={`button ${language === 'english' ? 'active' : ''}`}
//             onClick={toggleLanguage}
//           >
//             EN
//           </button>
//         </div>

//         <ul className="dropdown md:hidden">
//           {navLinks.map((link) => (
//             <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic-font' : 'ul-style'} hover:cursor-pointer`}>
//               <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
//             </li>
//           ))}
//         </ul>


//         <Hero language={language} />

//         <div className="relative z-0">
//           <Planting language={language} />
//           <Growing language={language} />
//           <Harvesting language={language} />
//           <Crushing language={language} />
//           <ColdPressing language={language} />
//           <Bottling language={language} />
//           <Products language={language} />
//           <Footer language={language} />
//         </div>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;



























// Backup behaviour

// import { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";
// import Hero from "./components/Hero";
// import Planting from "./components/Planting";
// import Growing from "./components/Growing";
// import Harvesting from "./components/Harvesting";
// import Crushing from "./components/Crushing";
// import ColdPressing from "./components/ColdPressing";
// import Bottling from "./components/Bottling";
// import Products from "./components/Products";
// import Footer from "./components/Footer";

// const App = () => {
//   const [toggle, setToggle] = useState(false);
//   const [language, setLanguage] = useState('english');
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   const toggleLanguage = () => {
//     setLanguage(language === 'english' ? 'arabic' : 'english');
//   };

//   useEffect(() => {
//     const totalItems = 10; // Total number of items to load (adjust as needed)
//     let loadedItems = 0; // Counter for loaded items

//     const updateProgress = () => {
//       loadedItems++;
//       const progress = Math.floor((loadedItems / totalItems) * 100);
//       setLoadingProgress(progress);
//     };

//     // Simulating loading of items (replace this with actual loading logic)
//     const loadingInterval = setInterval(updateProgress, 500);

//     // Clean up the interval and show the content when loading is complete
//     if (loadedItems === totalItems) {
//       clearInterval(loadingInterval);
//     }

//     return () => clearInterval(loadingInterval);
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         {loadingProgress < 100 && (
//           <div className="loader">
//             <span>{loadingProgress}%</span>
//           </div>
//         )}

//         <div className="vid-overlay">
//           <video className='videobg' src='../assets/images/background-vd.webm' loop muted autoPlay></video>
//         </div>

//         <div className="gradient">
//           <div className="topGradient"></div>
//           <div className="bottomGradient"></div>
//         </div>

//         <div className="languages absolute top-10 right-[135px] z-10">
//           <div className="options">
//             <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
//               {/* Navigation Links */}
//             </ul>
//           </div>

//           {/* Toggle Button */}
//           <img
//             src={toggle ? "./assets/images/close.svg" : "./assets/images/menu.svg"}
//             alt="menu"
//             className='menu w-[25px] h-[25px] object-contain cursor-pointer md:hidden'
//             onClick={() => setToggle(!toggle)}
//           />

//           {/* Language Buttons */}
//           <button
//             className={`button ${language === 'arabic' ? 'active' : ''}`}
//             onClick={toggleLanguage}
//           >
//             AR
//           </button>
//           <span className="partition"></span>
//           <button
//             className={`button ${language === 'english' ? 'active' : ''}`}
//             onClick={toggleLanguage}
//           >
//             EN
//           </button>
//         </div>

//         {/* Dropdown Menu */}
//         {toggle && (
//           <ul className="dropdown md:hidden">
//             {/* Dropdown Items */}
//           </ul>
//         )}

//         {/* Main Content */}
//         <Hero language={language} />
//         <div className="relative z-0">
//           {/* Other Components */}
//         </div>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
