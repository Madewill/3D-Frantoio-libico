import { useState } from 'react';

const MobileDropdown = ({ navLinks, language }) => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("");

    // const navLinks = [
    //   {
    //     id: "process",
    //     title: "processes",
    //     arabicTitle: "عمليات",
    //   },
    //   {
    //     id: "products",
    //     title: "products",
    //     arabicTitle: "منتجات",
    //   },
    //   {
    //     id: "contact",
    //     title: "Contact",
    //     arabicTitle: "اتصال",
    //   },
    // ];

    return (
        <>
        {/* <div className="mobile-menu"> */}
            <img
                src={toggle ? "./assets/images/close.svg" : "./assets/images/menu.svg"}
                alt="menu"
                className='menu w-[25px] h-[25px] object-contain cursor-pointer md:hidden'
                onClick={() => setToggle(!toggle)}
            />
            {/* {toggle && (
                    <ul className="dropdown md:hidden list-none flex flex-col items-center">
                        {navLinks.map((link) => (
                            <li key={link.id} className={`font-sans ${language === 'arabic' ? 'arabic-font' : 'english-font'} hover:cursor-pointer`}>
                                <a href={`#${link.id}`}>{language === 'arabic' ? link.arabicTitle : link.title}</a>
                            </li>
                        ))}
                    </ul>
            )} */}
            {/* </div> */}
        </>
    );
};


export default MobileDropdown;
