import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const scrollToSection = () => {
    const element = document.getElementById('process');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const Hero = ({ language, isLoaded }) => {
    const [animateHero, setAnimateHero] = useState(false);

    useEffect(() => {
        if (isLoaded) {
            setAnimateHero(true);
        }
    }, [isLoaded]);

    // useEffect(() => {
    //     if (animateHero) {
    //         const bar = document.querySelector('.bar');
    //         if (bar) {
    //             bar.style.transition = 'width 0.5s';
    //             bar.style.width = '80%';
    //         }
    //     } else {
    //         const bar = document.querySelector('.bar');
    //         if (bar) {
    //             bar.style.transition = 'width 0.5s';
    //             bar.style.width = '0%';
    //         }
    //     }
    // }, [animateHero]);


    return (
        <section className='Hero'>
            <motion.div
                className="nav"
                transition={{ duration: 0.8 , delay: 1 }}
                initial={{ y: -200 }} // Initial position above the viewport
                animate={animateHero ? { y: 0 } : { y: -200 }} // Animate to 0 (visible) when loaded
            >
                <img src={language === 'english' ? '../assets/images/english.jpg' : '../assets/images/arabic-logo.jpg'} alt="" className="logo" />
                <div className="empty"></div>
            </motion.div>

            <motion.div
                className="bar"
                initial={{ scaleX: 0 }}
                animate={animateHero ? { scaleX: 1 } : { scaleX: 0 }}
                transformOrigin="left center"
                transition={{ duration: 0.8 , delay: 1 }}
            ></motion.div>


            <div className="contents">
                <div className="up-contents">
                    {language === 'english' ? (
                        <motion.h2 initial={{ y: -200 }}
                            animate={animateHero ? { y: 0 } : { y: -200 }}   transition={{ duration: 0.8 , delay: 1 }}
                            className='english frantoio'>FRANTOIO LIBICO</motion.h2>
                    ) : (
                        <motion.h2 initial={{ y: -200 }}
                            animate={animateHero ? { y: 0 } : { y: -200 }}   transition={{ duration: 0.8 , delay: 1 }} className='arabic goumet'>عصر المغفل الليبي</motion.h2>
                    )}
                    {language === 'english' ? (
                        <motion.p
                            initial={{ x: 500 }}
                            animate={animateHero ? { x: 0 } : { x: 500 }}   transition={{ duration: 0.8 , delay: 1 }} className='goumet'>from Grove to Gourmet</motion.p>
                    ) : (
                        <motion.p
                            initial={{ x: -200 }}
                            animate={animateHero ? { x: 0 } : { x: -200 }}   transition={{ duration: 0.8 , delay: 1 }} className='arabic goumet'>من البستان إلى الطهاة الراقين</motion.p>
                    )}
                </div>

                <motion.div initial={{ y: -400 }}
                    animate={animateHero ? { y: 0 } : { y: -400 }}
                    transition={{ duration: 0.8 , delay: 1 }}
                    className="gif">
                    <video autoPlay loop muted className="">
                        <source src="../assets/images/drop.webm" type="video/webm" />
                    </video>
                </motion.div>

                <div className="lower-text">
                    <motion.h3 initial={{ y: 200 }}
                        animate={animateHero ? { y: 0 } : { y: 200 }}
                        transition={{ duration: 0.8 , delay: 1 }}className={language === 'arabic' ? 'arabic-font-hero process' : 'process'}>
                        {language === 'english' ? (
                            <>
                                <span>Welcome to Frantoio Libico, your one-stop destination</span>
                                <br />
                                <span>for the finest cold-pressed virgin olive oil! Embark on a</span>
                                <br />
                                <span>whimsical journey with us as we take you through each</span>
                                <br />
                                <span>step of our olive oil-making process</span>
                            </>
                        ) : (
                            <>
                                <span className='arabic-font-hero'>مرحبًا بك في فرانتويو ليبيكو،</span>
                                <br />
                                <span className='arabic-font-hero'>وجهتك الواحدة لأفضل زيت زيتون بكر بالضغط البارد! انطلق معنا في رحلة خيالية</span>
                                <br />
                                <span className='arabic-font-hero'>حيث نأخذك خطوة بخطوة من خلال عملية صنع زيت الزيتون الخاص بنا</span>
                            </>
                        )}
                    </motion.h3>
                </div>

            </div>

            <motion.div
            initial={{ y: 200 }}
            animate={animateHero ? { y: 0 } : { y: 200 }}
            transition={{ duration: 0.8 , delay: 1 }}
            >
            <img src="../assets/images/scroll.svg" alt="scroll" className="scroll-down" onClick={scrollToSection} />
            </motion.div>

        </section>
    );
};

export default Hero;
