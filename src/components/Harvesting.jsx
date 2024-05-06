import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Harvesting = ({ language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();
    const canvasControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.harvesting');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.9) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            titleControls.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
            textControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
            canvasControls.start({ opacity: 1, transition: { duration: 1 } });
        } else {
            titleControls.start({ y: 50, opacity: 0 });
            textControls.start({ x: -100, opacity: 0 });
            canvasControls.start({ opacity: 0 });
        }
    }, [isVisible, titleControls, textControls, canvasControls]);

    return (
        <section className="harvesting overflow-hidden">
            <motion.h3
                initial={{ y: 50, opacity: 0 }}
                animate={titleControls}
                className={language === 'english' ? 'english' : 'arabicTitle'}
            >
                {language === 'english' ? 'HARVESTING' : 'قطف الزيتون'}
            </motion.h3>

            <motion.div
                className="section-text animated-text"
                initial={{ x: -100, opacity: 0 }}
                animate={textControls}
            >
                {language === 'english' ? (
                    <p id="harvesting-text">
                        Hands and tradition meet in the olive <br />
                        groves as the ripe olives are carefully <br />
                        harvested. Each olive is picked with <br />
                        respect, preserving its integrity and the <br />
                        ancient bond between land and farmer.
                    </p>
                ) : (
                    <p className='Arabic'>
                        تلتقي األيدي في بساتين الزيتون<br />حيث يتم قطف الزيتون الناضج بعناية<br />و رعاية فائقة للحفاظ على سالمة الثمرة.
                    </p>
                )}
            </motion.div>

            {/* <motion.div
                className="canvas"
                initial={{ opacity: 0 }}
                animate={canvasControls}
            >
                <HarvestCanvas />
            </motion.div> */}
        </section>
    );
};

export default Harvesting;


















// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import HarvestCanvas from './canvas/harvest'

// const Harvesting = ({ language }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const titleControls = useAnimation();
//     const textControls = useAnimation();

//     useEffect(() => {
//         const handleScroll = () => {
//             const section = document.querySelector('.planting');
//             if (section) {
//                 const sectionTop = section.getBoundingClientRect().top;
//                 const windowHeight = window.innerHeight;
//                 if (sectionTop < windowHeight * 0.9) {
//                     setIsVisible(true);
//                 } else {
//                     setIsVisible(false);
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         if (isVisible) {
//             titleControls.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
//             textControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
//         } else {
//             titleControls.start({ y: 50, opacity: 0 });
//             textControls.start({ x: -100, opacity: 0 });
//         }
//     }, [isVisible, titleControls, textControls]);
    
//     return (
//         <>
//          <section className="harvesting overflow-hidden">
//          <motion.h3
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={titleControls}
//                     className={language === 'english' ? 'english' : 'arabicTitle'}
//                 >
//                     {language === 'english' ? 'HARVESTING' : 'قطف الزيتون'}
//                 </motion.h3>
            



//                 {/* {language === 'english' ? (<>
//                     <h3 className='english'>HARVESTING</h3></>)  : (<>
                    
//                     <h3 className='arabicTitle'>قطف الزيتون</h3>
//                     </>)}                         */}
//                 {/* <h3 id="section-title">{language === 'english' ? 'HARVESTING' : 'قطف الزيتون' }</h3> */}

            
//                 <motion.div className="section-text animated-text"
//                         initial={{ x: -100, opacity: 0 }}
//                         animate={textControls}
//                         style={{ 
//                             '@media (maxWidth: 768px)': { // Apply different animation for mobile screens
//                                 x: 0, // Animate from 0px to its actual position in x direction
//                                 y: 25, // Animate from 0px to its actual position in y direction
//                                 transition: { duration: 1 }, // Same transition duration as desktop
//                             } 
//                         }}
//                     >


//                         {language === 'english' ? (<> <p id="harvesting-text">
//         Hands and tradition meet in the olive <br />
//         groves as the ripe olives are carefully <br />
//         harvested. Each olive is picked with <br />
//         respect, preserving its integrity and the <br />
//         ancient bond between land and farmer.
//       </p> </>) :  (<>
    
//         <p className='Arabic'>تلتقي األيدي في بساتين الزيتون<br />حيث يتم قطف الزيتون الناضج بعناية<br />و رعاية فائقة للحفاظ على سالمة الثمرة.</p>

      
//       </>) }
//                     </motion.div>

//                     <HarvestCanvas />
//             </section>

//         </>
//     )
// }

// export default Harvesting