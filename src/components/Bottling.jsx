import React from 'react'

const Bottling = ({ language }) => {
    return (
        <>
            <section className="bottling overflow-hidden">
                <h3 id="section-title">{language === 'english' ? 'BOTTLING' : 'تعبئة الزيت'}</h3>


                <div className="section-text">
                    {language === 'english' ? (<> <p id="bottling-text">
                        In the final frame, the golden oil finds<br />its home in elegant
                        bottles. Each bottle<br />
                        is a testament to quality, a bridge from <br />
                        our groves to your table, sealing the essence <br /> of our organic,
                        cold-pressed extra virgin olive oil.
                    </p> </>) : (<>  <p>في الإطار النهائي، يجد الزيت الذهبي موطنه في زجاجات أنيقة. <br /> كل زجاجة هي شهادة على الجودة، وهي بمثابة جسر من بساتيننا <br /> إلى طاولتك، مما يحافظ على جوهر زيت الزيتون البكر الممتاز <br /> العضوي والمعصور على البارد.</p> </>)}

                </div>
            </section>

        </>
    )
}

export default Bottling;