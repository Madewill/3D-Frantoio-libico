import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import BottleCanvas from './canvas/bottle';

const Bottling = ({ language }) => {
    const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.bottling'); // Check for the visibility of the Growing section
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
            <section className="bottling overflow-hidden">

            <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'english' : 'arabicTitle'}
                >
                    {language === 'english' ? 'BOTTLING' : 'تعبئة الزيت'}
                </motion.h3>

            {/* {language === 'english' ? (<>
                    <h3 className='english'>BOTTLING</h3></>)  : (<>
                    
                    <h3 className='arabicTitle'>تعبئة الزيت</h3>
                    </>)}                         */}
                {/* <h3 id="section-title">{language === 'english' ? 'BOTTLING' : 'تعبئة الزيت'}</h3> */}

                <motion.div 
                 initial={{ x: 200, opacity: 0 }}
                 animate={textControls} className="section-text animated-text">
                    {language === 'english' ? (<> <p id="bottling-text">
                        In the final frame, the golden oil finds<br />its home in elegant
                        bottles. Each bottle<br />
                        is a testament to quality, a bridge from <br />
                        our groves to your table, sealing the essence <br /> of our organic,
                        cold-pressed extra virgin olive oil.
                    </p> </>) : (<>  
                        
                    <p className='Arabic'>في الإطار النهائي، يجد الزيت الذهبي موطنه في زجاجات أنيقة. <br /> كل زجاجة هي شهادة على الجودة، وهي بمثابة جسر من بساتيننا <br /> إلى طاولتك، مما يحافظ على جوهر زيت الزيتون البكر الممتاز <br /> العضوي والمعصور على البارد.</p>
                    
                     </>)}

                </motion.div>
                {/* <BottleCanvas /> */}
            </section>

        </>
    )
}

export default Bottling;