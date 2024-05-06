import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PresserCanvas from './canvas/presser';

const ColdPressing = ({ language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();
    const canvasControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.coldPressing');
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
        <>
            <section className="coldPressing overflow-hidden">
                <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'english' : 'arabicTitle'}
                >
                    {language === 'english' ? 'COLD PRESSING' : 'سحق الزيتون'}
                </motion.h3>

                <motion.div
                    className="section-text"
                    initial={{ x: -100, opacity: 0 }}
                    animate={textControls}
                >
                    {language === 'english' ? (
                        <p id="pressing-text">
                            Within our state-of-the-art press,<br />the harvested olives are<br />
                            transformed. Through cold pressing, the <br />
                            olives release their rich, golden oil — a <br />
                            pure expression of nature, bottled without <br />
                            losing a drop of its essence.
                        </p>
                    ) : (
                        <p className='Arabic'>
                            بين الحصاد والعصر، يكمن فن السحق.<br />هنا، يتم سحق الزيتون بلطف، وهي عملية يتم فيها طحن اللحم<br />والبذور لتكوين عجينة. تؤدي هذه الخطوة الحاسمة إلى فتح كنوز الزيتون المخفية،<br />وإعدادها للتحول إلى ذهب سائل.
                        </p>
                    )}
                </motion.div>

                {/* <motion.div
                    className="canvas"
                    initial={{ opacity: 0 }}
                    animate={canvasControls}
                >
                    <PresserCanvas />
                </motion.div> */}
            </section>
        </>
    );
};

export default ColdPressing;























// import React from 'react'
// import PresserCanvas from './canvas/presser';

// const ColdPressing = ({ language }) => {
//     return (
//         <>
//             <section className="coldPressing overflow-hidden">
                
//             {language === 'english' ? (<>
//                     <h3 className='english'>COLDPRESSING</h3></>)  : (<>
                    
//                     <h3 className='arabicTitle'>سحق الزيتون</h3>
//                     </>)}                        
            

//                 {/* <h3 id="section-title">{language === 'english' ? 'COLD PRESSING' : 'سحق الزيتون'}</h3> */}

//                 <div className="section-text">
//                     {language === 'english' ? (<>     <p id="pressing-text">
//                         Within our state-of-the-art press,<br />the harvested olives are<br />
//                         transformed. Through cold pressing, the <br />
//                         olives release their rich, golden oil — a <br />
//                         pure expression of nature, bottled without <br />
//                         losing a drop of its essence.
//                     </p> </>) : (<> 
//                         <p className='Arabic'>بين الحصاد والعصر، يكمن فن السحق.<br />هنا، يتم سحق الزيتون بلطف، وهي عملية يتم فيها طحن اللحم<br />والبذور لتكوين عجينة. تؤدي هذه الخطوة الحاسمة إلى فتح كنوز الزيتون المخفية،<br />وإعدادها للتحول إلى ذهب سائل.</p>

// {/*                       
//                     <p className='Arabic'>بين الحصاد والعصر، يكمن فن السحق. <br /> هنا، يتم سحق الزيتون بلطف، وهي عملية يتم فيها طحن اللحم <br /> والبذور لتكوين عجينة. تؤدي هذه الخطوة الحاسمة إلى فتح كنوز الزيتون المخفية، <br /> وإعدادها للتحول إلى ذهب سائل.</p>  */}
                
//                     </>)}
//                 </div>
//                 {/* <PresserCanvas /> */}
//             </section>
//         </>
//     )
// }

// export default ColdPressing;