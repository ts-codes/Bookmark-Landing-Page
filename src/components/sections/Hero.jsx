import React from 'react';
import { heroImage } from '/assets';

const Hero = () => {
    return (
        <header className="overflow-x-hidden">
            <div
                className="hidden relative lg:block w-screen max-w-[1440px] mx-auto h-[1px]"
                aria-hidden="true"
            >
                <div className="absolute right-0 hidden lg:block top-16">
                    <img
                        className="lg:h-[340px] xl:h-[440px]"
                        src={heroImage}
                        alt=""
                    />
                </div>
            </div>

            <section className="  mx-4 mb-20 lg:py-32 xl:py-40 lg:mx-auto  lg:max-w-[85%] xl:max-w-[1150px]">
                <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:items-center ">
                    <div className="flex flex-col md:mr-6 lg:mr-0 mx-4 md:max-w-[350px] lg:max-w-none lg:mx-0 lg:w-1/2 xl:max-w-[500px] 2xl:max-w-none">
                        <h1 className="mb-6 text-2xl font-medium text-center md:text-left sm:text-3xl xl:text-4xl text-theme-darkBlue">
                            A Simple Bookmark <br />
                            Manager
                        </h1>
                        <p className="mb-6 text-base text-center md:text-left text-theme-darkBlue/60">
                            A clean and simple interface to organize your
                            favourite websites. Open a new browser tab and see
                            your sites load instantly. Try it for free.
                        </p>
                        <div className="flex mx-auto space-x-4 md:mx-0">
                            <a className="max-w-[160px] p-3 text-sm text-white bg-theme-lightBlue border-2 border-theme-lightBlue hover:text-theme-lightBlue hover:bg-white rounded cursor-pointer transition-all duration-250 ease-in-out shadow-lg select-none">
                                Get it on Chrome
                            </a>
                            <a className="max-w-[160px] p-3 text-sm text-gray-600 bg-gray-200 border-2 border-gray-200 hover:border-gray-600 hover:text-gray-600  hover:bg-white rounded cursor-pointer transition-all duration-250 ease-in-out shadow-lg select-none">
                                Get it on Firefox
                            </a>
                        </div>
                    </div>
                    {/* ----- Image Div Mobile */}
                    <div className="lg:hidden mt-8 mb-16 max-w-[500px] self-end -mr-6 md:mr-0 md:self-auto">
                        <img className="" src={heroImage} alt="" />
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Hero;
