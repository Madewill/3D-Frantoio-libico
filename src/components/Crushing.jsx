import React from 'react'

const Crushing = ({ language }) => {
    return (
        <>
            <section className="crushing overflow-hidden">
                <h3 id="section-title">{language === 'english' ? 'CRUSHING' : 'عصر الزيتون على البارد'}</h3>


                <div className="section-text">
                    {language === 'english' ? (<> <p id="crushing-text">
                        Between the harvest and the press <br />, comes the crushing. Here,
                        the olives are<br />
                        gently crushed, a process where the <br />
                        flesh and pits are ground to create a<br />
                        paste. This crucial step unlocks the<br />
                        olives' hidden treasures, preparing them<br />
                        for the transformation into liquid gold.
                    </p></>) : (<><p>في معاصرنا الحديثة، يتم تحويل الزيتون المحصود إلى زيت ذهبي غني صحي <br /> من خالل العصر البارد.</p> </>)}
                
                </div>
            </section>

        </>
    )
}

export default Crushing;