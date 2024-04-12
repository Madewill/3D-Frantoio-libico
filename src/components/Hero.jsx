import React from 'react';


const Hero = ({ language }) => {
    return (
        <>
            <section className='Hero'>

                {/* VIDEO AND IT"S CONTAINER: THE OVERLAY */}
                <div className="vid-overlay">
                    <video className='' src='../assets/images/background-vd.webm' loop muted autoPlay></video>
                </div>

                {/* NAVIGATION CONTAINING THE LOGO */}
                <div className="nav">
                    <img src={language === 'english' ? '../assets/images/Square-fig.svg' : '../assets/images/arabic-logo.jpg'} alt="" className="logo" />
                    <div className="empty"></div>
                </div>

                {/* CONTENTS */}
                <div className="contents">

                    <div className="up-contents">
                        <h2>{language === 'english' ? 'FRANTOIO LIBICO' : "عصر المغفل الليبي"}</h2>
                        <p>{language === 'english' ? 'from Grove to Gourmet' : "من البستان إلى الطهاة الراقين"}</p>
                    </div>

                    <div className="gif">
                        <img src="../assets/images/gif.gif" alt="" />
                    </div>

                    <div className="lower-text">
                        <h3 id="description">
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
                                    <span>مرحبًا بك في فرانتويو ليبيكو،</span>
                                    <br />
                                    <span>وجهتك الواحدة لأفضل زيت زيتون بكر بالضغط البارد! انطلق معنا في رحلة خيالية</span>
                                    <br />
                                    <span>حيث نأخذك خطوة بخطوة من خلال عملية صنع زيت الزيتون الخاص بنا</span>
                                </>
                            )}
                        </h3>
                </div>

            </div>

            <img src="../assets/images/scroll.svg" alt="scroll" className="scroll-down" />



        </section >
        </>
    )
};

export default Hero;