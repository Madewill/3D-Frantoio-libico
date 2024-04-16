import React from 'react';
import SeedCanvas from './canvas/Seed';
import { motion, AnimatePresence } from 'framer-motion';

const Planting = ({ language }) => {
    return (
        <>
            <section className="planting overflow-hidden">
                <AnimatePresence>
                    {true && (
                        <motion.h3
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            id="section-title"
                        >
                            {language === 'english' ? 'PLANTING' : 'زراعة البذرة'}
                        </motion.h3>
                    )}
                </AnimatePresence>

                <div className="section-text">
                    <AnimatePresence>
                        {true && (
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {language === 'english' ? (
                                    <>
                                        A single olive seed is gently placed into<br />
                                        fertile soil. This marks the beginning of a<br />
                                        journey, where care and nature cultivate<br />
                                        the essence of our premium olive oil.
                                    </>
                                ) : (
                                    <>
                                        في قلب حقل مشمس، توضع بذرة زيتون واحدة بعناية في تربة خصبة.<br />
                                        وهذا يمثل بداية رحلة، حيث تتشابك الرعاية والطبيعة لزراعة<br /> جوهر زيت الزيتون الفاخر لدينا.
                                        بينما ينمو الزيتون، يعكس الزراعون العناية <br />والحب للأرض والطبيعة.
                                    </>
                                )}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <SeedCanvas />
            </section>
        </>
    );
};

export default Planting;
