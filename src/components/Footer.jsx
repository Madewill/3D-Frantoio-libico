import React from 'react';
import { useRef, useState } from 'react';
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



    return (
        <>
            <div className="footer">

                <div className="contact-us">
                    <h3 id="contact-h3">{language === 'english' ? 'Contact Form' : 'نموذج الاتصال'}</h3>
                    <input type="text" placeholder={language === 'english' ? 'Name' : 'الاسم'} />
                    <input type="email" placeholder={language === 'english' ? 'Email' : 'البريد الإلكتروني'} />
                    <textarea rows="" cols="" placeholder={language === 'english' ? 'Your Message' : 'رسالتك'}></textarea>
                    <button>{language === 'english' ? 'Send' : 'إرسال'}</button>
                </div>


                <div className="about-us">
                    <div className="about">
                        <h3 id="about-h3">{language === 'english' ? 'About Us' : 'عن شركتنا'}</h3>
                        <p id="about-text">
                            {language === 'english' ? (<> Oliolibico is a leading supplier and manufacturer of olive oil.<br /> Our product consist of a huge selection of valuable cold pressed <br/> olive oil. </>) : (<>'أوليوليبيكو هي شركة رائدة في توريد وتصنيع زيت الزيتون. منتجاتنا تتكون من مجموعة كبيرة من زيت الزيتون البكر الممتاز العضوي والمعصور على البارد.' </>)}
                        </p>
                    </div>


                    <div className="contact">
                        <h3 id="contact-h3-2">{language === 'english' ? 'Contact us' : '>اتصل بنا'}</h3>
                        <div className='contacts-container'>
                            <p>{language === 'english' ? 'info@oliolibico.com' : 'معلومات@أوليوليبيكو.كوم'}</p>
                            <p>+218 94 200 05 17</p>
                        </div>
                    </div>

                    <div className="copyright">
                        {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
                            <p>حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
                        </>)}
                    </div>
                </div>
            
            </div>

            <div className="copyright-mobile">
                        {language === 'english' ? (<> <p>Copyright © 2024 Oliolibico, All rights reserved</p></>) : (<>
                            <p>حقوق النشر © 2024 أوليوليبيكو، جميع الحقوق محفوظة</p>
                        </>)}
                    </div>

        </>
    )
}

export default Footer