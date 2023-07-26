import React, { useState } from 'react';
import {
    hamburger,
    iconClose,
    logoBookmark,
    logoWhite,
    facebook,
    twitter,
} from '/assets';

const Navbar = () => {
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

    const toggleNav = () => {
        setMobileNavIsOpen((prevState) => !prevState);
    };

    const Line = () => (
        <div
            className="w-full h-[1px] bg-white bg-opacity-20"
            aria-hidden="true"
        ></div>
    );

    const desktopNav = (
        <nav className="w-full lg:max-w-[85%] xl:max-w-[1150px] h-16 px-4 md:px-10 flex justify-between items-center mx-auto pt-8">
            <div>
                <img src={logoBookmark} alt="logo" className="cursor-pointer" />
            </div>
            <ul className="items-center hidden space-x-8 md:flex">
                <li>
                    <a
                        href="#"
                        className="text-sm uppercase text-theme-darkBlue hover:text-theme-red"
                    >
                        features
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-sm uppercase text-theme-darkBlue hover:text-theme-red"
                    >
                        pricing
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-sm uppercase text-theme-darkBlue hover:text-theme-red"
                    >
                        contact
                    </a>
                </li>
                <li>
                    <button className="h-10 text-sm text-white uppercase transition-all ease-in-out border-2 rounded shadow-lg cursor-pointer select-none bg-theme-red border-theme-red hover:text-theme-red hover:bg-white w-28 duration-250">
                        LOGIN
                    </button>
                </li>
            </ul>
            <div className="hamburger md:hidden">
                <img
                    tabIndex={0}
                    role="button"
                    onClick={toggleNav}
                    src={hamburger}
                    alt="mobile menu"
                />
            </div>
        </nav>
    );

    const mobileMenu = (
        <>
            <nav className=" min-h-screen md:hidden z-50 absolute top-0 left-0 right-0 flex flex-col bg-[#1E2339] bg-opacity-95 pt-3">
                <div className="flex items-center justify-between px-4 py-6 md:px-10">
                    <img src={logoWhite} alt="logo" />
                    <img
                        src={iconClose}
                        alt="close mobile menu"
                        onClick={toggleNav}
                    />
                </div>
                <div className="px-12 mt-12 mb-12">
                    <ul className="text-xl space-y-7 ">
                        <Line />

                        <li className="flex items-center justify-center w-full text-white uppercase">
                            <a href="#" onClick={toggleNav}>
                                features
                            </a>
                        </li>

                        <Line />

                        <li className="flex items-center justify-center w-full text-white uppercase">
                            <a href="#" onClick={toggleNav}>
                                pricing
                            </a>
                        </li>

                        <Line />

                        <li className="flex items-center justify-center w-full text-white uppercase">
                            <a href="#" onClick={toggleNav}>
                                contact
                            </a>
                        </li>

                        <Line />

                        <li className="flex items-center justify-center w-full">
                            <a
                                className="w-full py-3 font-medium text-center text-white uppercase border border-white rounded login"
                                href="#"
                                onClick={toggleNav}
                            >
                                login
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-around mx-auto mt-auto mb-8 w-36">
                    <img src={facebook} alt="facebook logo" />
                    <img src={twitter} alt="twitter logo" />
                </div>
            </nav>
        </>
    );

    return <>{mobileNavIsOpen ? mobileMenu : desktopNav}</>;
};

export default Navbar;
