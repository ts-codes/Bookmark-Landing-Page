import React, { useEffect, useState } from 'react';
import { iconError, bookmarkFooterLogo, facebook, twitter } from '/assets';

const Footer = () => {
    const [emailError, setEmailError] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const handleInputChange = (e) => {
        setEmailValue(e.target.value);
        setEmailError(false);
    };
    const validateEmail = (email) => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(emailValue)) {
            setEmailValue('');
        }
    };

    useEffect(() => {
        if (emailValue.length) {
            if (validateEmail(emailValue)) {
                setEmailError(false);
            } else {
                setEmailError(true);
            }
        }
    }, [emailValue]);

    return (
        <footer className="w-full bg-theme-lightBlue">
            <div className="max-w-[540px] flex flex-col pt-12 pb-12 mx-auto ">
                <span className="mx-auto mb-6 text-xs tracking-widest text-center text-white uppercase">
                    35,000+ already joined
                </span>
                <h2 className="mx-4 mb-6 text-2xl font-medium text-center text-white md:mx-auto">
                    Stay up-to-date with what <br /> we’re doing
                </h2>

                <form
                    className="flex flex-col w-full mb-6 sm:flex-row sm:space-x-4 sm:justify-center"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <div
                        className={`flex relative mx-8 sm:mx-0 max-w-full md:w-[300px] sm:w-[275px] rounded sm:mb-0 ${
                            emailError ? 'mb-10' : 'mb-4'
                        }`}
                    >
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            value={emailValue}
                            onChange={handleInputChange}
                            className="z-20 flex-1 p-4 text-sm bg-transparent rounded focus:outline-none"
                        />
                        <img
                            src={iconError}
                            alt="error-icon"
                            className={`z-20 h-5 mx-2 my-auto ${
                                emailError ? 'block' : 'hidden'
                            }`}
                        />
                        <div
                            className="absolute inset-0 z-10 bg-white rounded"
                            aria-hidden="true"
                        ></div>
                        {/* ----- Error msg */}
                        <div
                            className={`absolute z-0 bg-theme-red rounded -inset-[2px] -mb-6 flex-col justify-end ${
                                emailError ? 'flex' : 'hidden'
                            }`}
                        >
                            <span className="mb-1 ml-2 text-xs italic font-medium text-white">
                                Whoops, make sure it’s an email
                            </span>
                        </div>
                    </div>

                    <button className="mx-8 sm:mx-0  flex items-center justify-center max-w-full sm:w-[125px] h-12 text-sm text-white transition-all ease-in-out border-2 rounded shadow-lg cursor-pointer bg-theme-red border-theme-red hover:text-theme-red hover:bg-white duration-250 select-none">
                        Contact Us
                    </button>
                </form>
            </div>

            <nav className="py-12 bg-theme-darkBlue md:py-1">
                <div className=" items-center md:max-w-[1100px] md:mx-auto flex flex-col md:flex-row md:justify-between md:px-8 md:items-center">
                    <div className="flex flex-col text-white uppercase text-sm md:flex-row md:justify-between md:w-1/2 md:min-w-[500px] md:py-4">
                        <a href="#" className="mb-10 md:mb-0">
                            <img src={bookmarkFooterLogo} alt="bookmark-logo" />
                        </a>
                        <a
                            href="#"
                            className="mx-auto mb-8 md:mx-0 hover:text-theme-red md:mb-0"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="mx-auto mb-8 md:mx-0 hover:text-theme-red md:mb-0"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="mx-auto mb-8 md:mx-0 hover:text-theme-red md:mb-0"
                        >
                            Contact
                        </a>
                    </div>
                    <div className="flex justify-between space-x-4 md:space-x-6">
                        <a href="#" className="123">
                            <img
                                src={facebook}
                                className="hover:text-theme-red"
                                alt="facebook-logo"
                            />
                        </a>
                        <a href="#" className="123">
                            <img src={twitter} alt="twitter-logo" />
                        </a>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
