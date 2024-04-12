import React from 'react'

const ColdPressing = ({ language }) => {
    return (
        <>
            <section className="coldPressing overflow-hidden">
                <h3 id="section-title">{language === 'english' ? 'COLD PRESSING' : 'سحق الزيتون'}</h3>


                <div className="section-text">
                    {language === 'english' ? (<>     <p id="pressing-text">
                        Within our state-of-the-art press,<br />the harvested olives are<br />
                        transformed. Through cold pressing, the <br />
                        olives release their rich, golden oil — a <br />
                        pure expression of nature, bottled without <br />
                        losing a drop of its essence.
                    </p> </>) : (<> <p>بين الحصاد والعصر، يكمن فن السحق. <br /> هنا، يتم سحق الزيتون بلطف، وهي عملية يتم فيها طحن اللحم <br /> والبذور لتكوين عجينة. تؤدي هذه الخطوة الحاسمة إلى فتح كنوز الزيتون المخفية، <br /> وإعدادها للتحول إلى ذهب سائل.</p> </>)}
                </div>
            </section>
        </>
    )
}

export default ColdPressing;