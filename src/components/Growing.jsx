import React from 'react'
import TreeCanvas from './canvas/tree';

const Growing = ({ language }) => {
    return (
        <>
            <section className="growing overflow-hidden">
                <h3 id="section-title">{language === 'english' ? 'GROWING' : 'زراعة أشجار الزيتون' }</h3>

            
                    <div className="section-text">
                        {language === 'english' ?(<> <p id="growing-text">
                            As seasons change, the trees flourish, <br />
                            their branches laden with the promise<br />
                            of future harvests.
                        </p> </>) :  (<> <p>مع تعاقب الفصول، تمتد أشجار زيتوننا نحو السماء، وجذورها تمسك األرض بقوة.<br />
                            محاطة بتناغم الطبيعة، تزدهر األشجار، وأغصانها محملة بالمحاصيل المستقبلية.</p>
                            </>) }
                    </div>
                    <TreeCanvas />
            </section>


        </>
    )
}

export default Growing;