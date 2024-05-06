import React, { useEffect, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

const Products = ({ language }) => {

  const [isVisible, setIsVisible] = useState(false);
    const titleControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('#products'); // Check for the visibility of the Growing section
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
    <section    id="products" className="product-frame">
      
             
    <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={titleControls}
                    className={language === 'english' ? 'english' : 'arabicTitle'}
                >
                    {language === 'english' ? 'PRODUCT FRAME' : 'إطار المنت'}
                </motion.h3>
      {/* {
        language === 'english' ? (<>
        <h3 className='english'>PRODUCT FRAME</h3>
        </>) : (<>
        <h3 className='arabicTitle'إطار المنتج</h3>
        </>)
      } */}
      
        <div className="bottling-model">
          {/* <img src="assets/bottling.svg" alt="" /> */}
        </div>
    </section>
    </>
  )
}

export default Products