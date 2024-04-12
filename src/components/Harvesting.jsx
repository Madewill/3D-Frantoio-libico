import React from 'react'

const Harvesting = ({ language }) => {
    return (
        <>
         <section className="harvesting overflow-hidden">
                <h3 id="section-title">{language === 'english' ? 'HARVESTING' : 'قطف الزيتون' }</h3>

            
                    <div className="section-text">
                        {language === 'english' ? (<> <p id="harvesting-text">
        Hands and tradition meet in the olive <br />
        groves as the ripe olives are carefully <br />
        harvested. Each olive is picked with <br />
        respect, preserving its integrity and the <br />
        ancient bond between land and farmer.
      </p> </>) :  (<><p>تلتقي األيدي في بساتين الزيتون<br />حيث يتم قطف الزيتون الناضج بعناية ورعاية فائقة للحفاظ على سالمة الثمرة.</p> </>) }
                    </div>
            </section>

        </>
    )
}

export default Harvesting