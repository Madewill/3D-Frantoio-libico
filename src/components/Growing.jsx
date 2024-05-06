import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TreeCanvas from './canvas/tree';

const Growing = ({ language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.growing'); // Check for the visibility of the Growing section
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
            <section className="growing overflow-hidden">
                
            <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'english' : 'arabicTitle'}
                >
                    {language === 'english' ? 'GROWING' : 'زراعة أشجار الزيتون'}
                </motion.h3>



                {/* {language === 'english' ? (
                    <>
                        <h3 className='english'>GROWING</h3>
                    </>
                ) : (
                    <>
                        <h3 className='arabicTitle'>زراعة أشجار الزيتون</h3>
                    </>
                )} */}

                <motion.div 
                 initial={{ x: 200, opacity: 0 }}
                 animate={textControls} className="section-text animated-text">
                        {language === 'english' ? (
                            <>
                                As seasons change, the trees flourish, <br />
                                their branches laden with the promise <br />
                                of future harvests.
                            </>
                        ) : (
                            <>
                                <p className='Arabic'>
                                    مع تعاقب الفصول، تمتد أشجار زيتوننا نحو السماء، وجذورها تمسك األرض بقوة.<br />
                                    محاطة بتناغم الطبيعة، تزدهر األشجار، وأغصانها محملة بالمحاصيل المستقبلية.
                                </p>
                            </>
                        )}
                </motion.div>
            </section>
        </>
    );
};

export default Growing;
