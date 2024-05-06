import React, { useEffect, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';
import CrusherCanvas from './canvas/crusher';

const Crushing = ({ language }) => {

    const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.crushing'); // Check for the visibility of the Growing section
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (sectionTop < windowHeight * 0.85) {
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
        } else {
            titleControls.start({ y: 50, opacity: 0 });
            textControls.start({ x: 200, opacity: 0 });
        }
    }, [isVisible, titleControls, textControls]);

    return (
        <>
            <section className="crushing overflow-hidden">
                
            <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'english' : 'arabicTitle'}
                >
                    {language === 'english' ? 'CRUSHING' : 'عصر الزيتون على البارد'}
                </motion.h3>




{/* 
            {language === 'english' ? (<>
                    <h3 className='english'>CRUSHING</h3></>)  : (<>
                    
                    <h3 className='arabicTitle'>عصر الزيتون على البارد</h3>
                    </>)}                         */}
            
                {/* <h3 id="section-title">{language === 'english' ? 'CRUSHING' : 'عصر الزيتون على البارد'}</h3> */}




                <motion.div 
                 initial={{ x: 200, opacity: 0 }}
                 animate={textControls} className="section-text animated-text">

                    {language === 'english' ? (<> <p id="crushing-text">
                        Between the harvest and the press <br />, comes the crushing. Here,
                        the olives are<br />
                        gently crushed, a process where the <br />
                        flesh and pits are ground to create a<br />
                        paste. This crucial step unlocks the<br />
                        olives' hidden treasures, preparing them<br />
                        for the transformation into liquid gold.
                    </p></>) : (<>

                        <p className='Arabic'>في معاصرنا الحديثة،<br />يتم تحويل الزيتون المحصود إلى زيت ذهبي غني صحي<br />من خالل العصر البارد.</p>

                    {/*                     
                    <p className='Arabic'>في معاصرنا الحديثة، يتم تحويل الزيتون المحصود إلى زيت ذهبي غني صحي <br /> من خالل العصر البارد.</p> 
                     */}
                    </>)}
                
                </motion.div>
                {/* <CrusherCanvas /> */}
            </section>

        </>
    )
}

export default Crushing;