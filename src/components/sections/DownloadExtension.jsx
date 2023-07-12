import React from 'react';
import { logoChrome, logoFirefox, logoOpera } from '/assets';

const DownloadExtension = () => {
    const Card = ({ source, browser, version, card }) => (
        <div
            className={`h-[370px] w-[280px] rounded-xl shadow-lg shadow-theme-lightBlue/20 flex flex-col items-center custom-card`}
        >
            <div className="flex flex-col items-center">
                <img className="mb-8 w-[100px] mt-12" src={source} alt="logo" />
                <h4 className="mb-3 text-xl font-medium text-theme-darkBlue">
                    Add to {browser}
                </h4>
                <p className="mb-8 text-base text-theme-darkBlue/60">
                    Minimum version {version}
                </p>
            </div>

            <div className="border-t-[1px] border-t-theme-darkBlue/20 border-dotted w-full flex justify-center items-center grow ">
                <a className="flex items-center justify-center w-[230px] h-12 text-sm text-white transition-all ease-in-out border-2 rounded shadow-lg cursor-pointer bg-theme-lightBlue border-theme-lightBlue hover:text-theme-lightBlue hover:bg-white duration-250 select-none">
                    Add & install Extension
                </a>
            </div>
        </div>
    );

    return (
        <section className="w-full mb-32">
            <div className="flex flex-col mx-auto mb-8 max-w-[540px]">
                <h2 className="mx-8 mb-4 text-2xl font-medium text-center md:mx-0 text-theme-darkBlue md:text-3xl ">
                    Download the Extension
                </h2>
                <p className="mx-8 mb-8 text-base text-center md:mx-0 text-theme-darkBlue/60">
                    We've got more browsers in the pipeline. Please do let us
                    know if you've got a favourite you'd like us to prioritize.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 gap-y-12">
                <Card source={logoChrome} browser={'Chrome'} version={62} />
                <Card source={logoFirefox} browser={'Firefox'} version={55} />
                <Card source={logoOpera} browser={'Opera'} version={46} />
            </div>
        </section>
    );
};

export default DownloadExtension;
