// import React from 'react';
// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// const Footer = ({ language }) => {
//     const formRef = useRef();
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({ ...form, [name]: value }); // Fixed object name typo
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);


//         emailjs
//             .send('service_jd8or1q', 'template_yb7bil4', {
//                 from_name: form.name,
//                 to_name: 'Ayomide',
//                 from_email: form.email,
//                 to_email: 'ayomidegw@gmail.com',
//                 message: form.message,
//             }, 'NxFpVvbWKrPs1T1ha')

//             .then((response) => {
//                 setLoading(false);
//                 console.log('Email sent:', response);

//                 alert('Thank you. I will get back to you as soon as possible');

//                 setForm({
//                     name: '',
//                     email: '',
//                     message: '',
//                 });
//             })
//             .catch((error) => {
//                 setLoading(false);
//                 console.error('Email error:', error);
//                 alert('Something went wrong.');
//             });
//     };



//     return (
//         <>
//             <div className="footer">

//                 <div className="contact-us">

//                     {language === 'english' ? (<h3>Contact Form</h3>) : (<h3>نموذج الاتصال'</h3>)}

//                     <input type="text" placeholder={language === 'english' ? 'Name' : 'الاسم'} />
//                     <input type="email" placeholder={language === 'english' ? 'Email' : 'البريد الإلكتروني'} />
//                     <textarea rows="" cols="" placeholder={language === 'english' ? 'Your Message' : 'رسالتك'}></textarea>
//                     <button>{language === 'english' ? 'Send' : 'إرسال'}</button>
//                 </div>


//                 <div className="about-us">
//                     <div className="about">
//                         <h3 id="about-h3">{language === 'english' ? 'About Us' : 'عن شركتنا'}</h3>
//                         <p id="about-text">
//                             {language === 'english' ? (<> Oliolibico is a leading supplier and manufacturer of olive oil.<br /> Our product consist of a huge selection of valuable cold pressed <br/> olive oil. </>) : (<>'أوليوليبيكو هي شركة رائدة في توريد وتصنيع زيت الزيتون. منتجاتنا تتكون من مجموعة كبيرة من زيت الزيتون البكر الممتاز العضوي والمعصور على البارد.' </>)}
//                         </p>
//                     </div>


//                     <div className="contact">
//                         <h3 id="contact-h3-2">{language === 'english' ? 'Contact us' : '>اتصل بنا'}</h3>
//                         <div className='contacts-container'>
//                             <p>{language === 'english' ? 'info@oliolibico.com' : 'معلومات@أوليوليبيكو.كوم'}</p>
//                             <p>+218 94 200 05 17</p>
//                         </div>
//                     </div>

//                     <div className="copyright">
//                         {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
//                             <p>حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
//                         </>)}
//                     </div>
//                 </div>
            
//             </div>

//             <div className="copyright-mobile">
//                         {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
//                             <p>حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
//                         </>)}
//                     </div>

//         </>
//     )
// }

// export default Footer;























import React, { useEffect, useState,  useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Footer = ({ language }) => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value }); // Fixed object name typo
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send('service_jd8or1q', 'template_yb7bil4', {
                from_name: form.name,
                to_name: 'Ayomide',
                from_email: form.email,
                to_email: 'ayomidegw@gmail.com',
                message: form.message,
            }, 'NxFpVvbWKrPs1T1ha')

            .then((response) => {
                setLoading(false);
                console.log('Email sent:', response);

                alert('Thank you. I will get back to you as soon as possible');

                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                setLoading(false);
                console.error('Email error:', error);
                alert('Something went wrong.');
            });
    };
    
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer');
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (footerTop < windowHeight * 0.9) {
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
            controls.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
            controls2.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
        } else {
            controls.start({ x: -50, opacity: 0 });
            controls2.start({ x: 50, opacity: 0 });
        }
    }, [isVisible, controls]);
    return (
        <>
        <div  id="contact" className="footer">

            <motion.div initial={{ x: -50, opacity: 0 }} animate={controls} className="contact-us">

                    {language === 'english' ? (<h3 className='english'>Contact Form</h3>) : (<h3 className="arabic-font">نموذج الاتصال</h3>)}

                    <input type="text" placeholder={language === 'english' ? 'Name' : 'الاسم'} className={language === 'arabic' ? 'arabic-font' : ''} />
                    <input type="email" placeholder={language === 'english' ? 'Email' : 'البريد الإلكتروني'} className={language === 'arabic' ? 'arabic-font' : ''} />
                    <textarea rows="" cols="" placeholder={language === 'english' ? 'Your Message' : 'رسالتك'} className={language === 'arabic' ? 'arabic-font' : ''}></textarea>
                    <button className={language === 'arabic' ? 'arabic-font' : ''}>{language === 'english' ? 'Send' : 'إرسال'}</button>
                </motion.div>


                <motion.div initial={{ x: 50, opacity: 0 }} animate={controls2} className="about-us">

                    <div className="about">
                        
                    {language === 'english' ? (<h3 className='english'>About Us</h3>) : (<h3 className="arabic-font">عن شركتنا</h3>)}

                        {/* <h3 id="about-h3">{language === 'english' ? 'About Us' : 'عن شركتنا'}</h3> */}

                            {language === 'english' ? (<p> Oliolibico is a leading supplier and manufacturer of olive oil.<br /> Our product consist of a huge selection of valuable cold pressed <br/> olive oil. </p>) : (<p className="arabic-font">أوليوليبيكو هي شركة رائدة في توريد وتصنيع زيت الزيتون. منتجاتنا تتكون من مجموعة كبيرة من زيت الزيتون البكر الممتاز العضوي والمعصور على البارد.' </p>)}
                    </div>


                    <div className="contact">

                    {language === 'english' ? (<h3 className='english'>Contact Us</h3>) : (<h3 className="arabic-font">اتصل بنا</h3>)}
                    
                        {/* <h3 >{language === 'english' ? 'Contact us' : '>اتصل بنا'}</h3> */}
                        <div className='contacts-container'>

                            {language === 'english' ? (<p className='english'>info@oliolibico.com</p>) : (<p className='arabic-font'>معلومات@أوليوليبيكو.كوم</p>)}

                            <p>+218 94 200 05 17</p>
                        </div>
                    </div>

                    <div className="copyright">
                        {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
                            <p className="arabic-font">حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
                        </>)}
                    </div>
                </motion.div>
            
            </div>
        

            <div className="copyright-mobile">
                        {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
                            <p className="arabic-font">حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
                        </>)}
                    </div>

        </>
    )
}

export default Footer;













// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const Footer = ({ language }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const controls = useAnimation();

//     useEffect(() => {
//         const handleScroll = () => {
//             const footer = document.querySelector('.footer');
//             if (footer) {
//                 const footerTop = footer.getBoundingClientRect().top;
//                 const windowHeight = window.innerHeight;
//                 if (footerTop < windowHeight * 0.9) {
//                     setIsVisible(true);
//                 } else {
//                     setIsVisible(false);
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         if (isVisible) {
//             controls.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
//         } else {
//             controls.start({ y: 50, opacity: 0 });
//         }
//     }, [isVisible, controls]);

//     return (
//         <motion.div className="footer" initial={{ y: 50, opacity: 0 }} animate={controls}>
//             <div className="contact-us">

// //                     {language === 'english' ? (<h3 className='english'>Contact Form</h3>) : (<h3 className="arabic-font">نموذج الاتصال</h3>)}

// //                     <input type="text" placeholder={language === 'english' ? 'Name' : 'الاسم'} className={language === 'arabic' ? 'arabic-font' : ''} />
// //                     <input type="email" placeholder={language === 'english' ? 'Email' : 'البريد الإلكتروني'} className={language === 'arabic' ? 'arabic-font' : ''} />
// //                     <textarea rows="" cols="" placeholder={language === 'english' ? 'Your Message' : 'رسالتك'} className={language === 'arabic' ? 'arabic-font' : ''}></textarea>
// //                     <button className={language === 'arabic' ? 'arabic-font' : ''}>{language === 'english' ? 'Send' : 'إرسال'}</button>
// //                 </div>


// //                 <div className="about-us">
// //                     <div className="about">
                        
// //                     {language === 'english' ? (<h3 className='english'>About Us</h3>) : (<h3 className="arabic-font">عن شركتنا</h3>)}

// //                         {/* <h3 id="about-h3">{language === 'english' ? 'About Us' : 'عن شركتنا'}</h3> */}

// //                             {language === 'english' ? (<p> Oliolibico is a leading supplier and manufacturer of olive oil.<br /> Our product consist of a huge selection of valuable cold pressed <br/> olive oil. </p>) : (<p className="arabic-font">أوليوليبيكو هي شركة رائدة في توريد وتصنيع زيت الزيتون. منتجاتنا تتكون من مجموعة كبيرة من زيت الزيتون البكر الممتاز العضوي والمعصور على البارد.' </p>)}
// //                     </div>


// //                     <div className="contact">

// //                     {language === 'english' ? (<h3 className='english'>Contact Us</h3>) : (<h3 className="arabic-font">اتصل بنا</h3>)}
                    
// //                         {/* <h3 >{language === 'english' ? 'Contact us' : '>اتصل بنا'}</h3> */}
// //                         <div className='contacts-container'>

// //                             {language === 'english' ? (<p className='english'>info@oliolibico.com</p>) : (<p className='arabic-font'>معلومات@أوليوليبيكو.كوم</p>)}

// //                             <p>+218 94 200 05 17</p>
// //                         </div>
// //                     </div>

// //                     <div className="copyright">
// //                         {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
// //                             <p className="arabic-font">حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
// //                         </>)}
// //                     </div>
// //                 </div>
            

//             <div className="copyright-mobile">
//                         {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
//                             <p className="arabic-font">حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
//                         </>)}
//                     </div>
//         </motion.div>
//     );
// };

// export default Footer;
