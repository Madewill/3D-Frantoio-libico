import React from 'react'
import SeedCanvas from './canvas/Seed';

const Planting = ({ language }) => {
    return (
        <>
            <section className="planting overflow-hidden">
                <h3 id="section-title">{language === 'english' ? 'PLANTING' : 'زراعة البذرة'}</h3>


                <div className="section-text">
                    <p>{language === 'english' ? (<>A single olive seed is gently placed into<br />
                        fertile soil. This marks the beginning of a<br />
                        journey, where care and nature cultivate<br />
                        the essence of our premium olive oil. </>) : ( <>
                            في قلب حقل مشمس، توضع بذرة زيتون واحدة بعناية في تربة خصبة.<br />
                            وهذا يمثل بداية رحلة، حيث تتشابك الرعاية والطبيعة لزراعة<br /> جوهر زيت الزيتون الفاخر لدينا.
                            بينما ينمو الزيتون، يعكس الزراعون العناية <br />والحب للأرض والطبيعة.
                        </>) }
                    </p>
                </div>
                <SeedCanvas />
            </section>


        </>
    )
}

export default Planting;