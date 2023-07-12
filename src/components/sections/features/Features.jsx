import React, { useState } from 'react';
import { tabContent } from './data';

const Features = () => {
    const titles = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];
    const [activeTab, setActiveTab] = useState(0);

    const updateActive = (index) => {
        setActiveTab(index);
    };
    return (
        <section className="mb-32 overflow-x-hidden">
            {/* ----- Text Container */}
            <div className="max-w-[540px] mx-auto">
                <h2 className="mx-8 mb-8 text-2xl font-medium text-center md:mx-0 text-theme-darkBlue md:text-3xl">
                    Features
                </h2>
                <p className="mx-8 mb-8 text-base text-center md:mx-0 text-theme-darkBlue/60">
                    Our aim is to make it quick and easy for you to access your
                    favourite websites. Your bookmarks sync between your devices
                    so you can access them on the go.
                </p>
            </div>
            {/* ----- Tab header container*/}
            <div className="flex mx-8 flex-col md:flex-row md:justify-between md:mx-auto md:max-w-[730px] mb-16 border-b-[1px] border-b-gray-400/50 md:mb-24">
                {titles.map((title, index) => (
                    <div key={title}>
                        <div className="LINE bg-gray-400/50 h-[1px] md:hidden"></div>
                        <button
                            onClick={() => updateActive(index)}
                            className={`${
                                activeTab === index
                                    ? ' block md:inline-block mx-auto md:mx-0 text-theme-darkBlue text-base border-b-[4px] border-b-theme-red py-4 hover:cursor-pointer max-w-max md:max-w-none'
                                    : ' block md:inline-block mx-auto md:mx-0 text-theme-darkBlue/60 text-base py-4 hover:cursor-pointer max-w-max md:max-w-none'
                            } `}
                        >
                            {title}
                        </button>
                    </div>
                ))}
            </div>
            {/* ----- Tab Content */}
            <div className="">
                {tabContent
                    .filter((item, index) => index === activeTab)
                    .map((item, index) => (
                        <div
                            key={item.id}
                            className="flex flex-col md:flex-row w-full md:max-w-[1440px] md:mx-auto md:space-x-12 "
                        >
                            <div className="max-w-[550px] md:max-w-none md:w-1/2 mr-8 md:mr-0 mb-8 md:mb-0">
                                <img src={item.image} alt="" />
                            </div>
                            {/* ----- paragraph container */}
                            <div className="flex flex-col mx-8 md:w-1/2 lg:mt-4 xl:mt-7 2xl:mt-16 md:mx-0">
                                <h3 className="mb-4 text-2xl font-medium text-center md:text-left text-theme-darkBlue md:text-3xl">
                                    {item.title}
                                </h3>
                                <p className="text-center md:text-left text-theme-darkBlue/60 text-base mb-8 md:max-w-[445px]">
                                    {item.paragraph}
                                </p>

                                <a className="flex items-center justify-center h-12 mx-auto text-sm text-white transition-all ease-in-out border-2 rounded shadow-lg cursor-pointer select-none md:mx-0 w-28 bg-theme-lightBlue border-theme-lightBlue hover:text-theme-lightBlue hover:bg-white duration-250">
                                    More Info
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Features;
