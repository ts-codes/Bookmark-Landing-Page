import React, { useState } from 'react';

const Faq = () => {
    const data = [
        {
            title: 'What is Bookmark',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam corrupti explicabo, a perspiciatis ab corporis quo. Ullam nostrum veritatis fugiat voluptatum ex sapiente cumque debitis molestias sed, neque consectetur voluptate ab excepturi at maiores architecto facere, recusandae nobis quae.',
        },
        {
            title: 'How can I request a new browser?',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea aperiam, corrupti doloremque distinctio perspiciatis necessitatibus sapiente minus officia dolore accusamus quam?',
        },
        {
            title: 'Is there a mobile app?',
            content:
                ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, deleniti sequi nemo vitae quisquam eaque.',
        },
        {
            title: 'What about other Chromium browsers?',
            content:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit maiores delectus vel laudantium sapiente debitis pariatur aperiam totam est?',
        },
    ];

    const [itemIsOpen, setItemIsOpen] = useState(null);
    const handleClick = (index) =>
        index === itemIsOpen ? setItemIsOpen(null) : setItemIsOpen(index);

    const AccordionItem = ({ title, content, itemIndex }) => (
        <div className="custom-accordion-item border-t-[1px] w-full border-t-gray-400/50">
            <button
                aria-label="toggle more information"
                onClick={() => handleClick(itemIndex)}
                className="flex items-center justify-between w-full my-5"
            >
                <h4 className="mr-2 text-lg text-left text-theme-darkBlue">
                    {title}
                </h4>

                {itemIsOpen === itemIndex ? (
                    <svg
                        className="rotate-180 min-w-min"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                    >
                        <path
                            fill="none"
                            stroke="#FA5959"
                            strokeWidth="3"
                            d="M1 1l8 8 8-8"
                        />
                    </svg>
                ) : (
                    <svg
                        className="min-w-min "
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                    >
                        <path
                            fill="none"
                            stroke="#5267DF"
                            strokeWidth="3"
                            d="M1 1l8 8 8-8"
                        />
                    </svg>
                )}
            </button>

            <div
                className={`  my-6 custom-accordion-content text-base text-theme-darkBlue/75 ${
                    itemIsOpen === itemIndex ? '' : 'hidden'
                }`}
            >
                {content}
            </div>
        </div>
    );

    return (
        <section className="">
            <div className="flex flex-col mx-auto mb-8 max-w-[540px]">
                <h2 className="mx-8 mb-4 text-2xl font-medium text-center md:mx-0 text-theme-darkBlue md:text-3xl ">
                    Frequently Asked Questions
                </h2>
                <p className="mx-8 mb-8 text-base text-center md:mx-0 text-theme-darkBlue/60">
                    Here are some of our FAQs. If you have any other questions
                    you'd like answered please feel free to email us.
                </p>
            </div>
            {/* ----- ACCORDION CONTAINER */}
            <div className="flex px-8 flex-col items-center mb-8 max-w-[604px]  mx-auto ">
                {data.map((item, index) => (
                    <AccordionItem
                        key={item.title}
                        itemIndex={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
            <div className="mb-36">
                <a className="flex items-center justify-center h-12 mx-auto text-sm text-white transition-all ease-in-out border-2 rounded shadow-lg cursor-pointer select-none w-28 bg-theme-lightBlue border-theme-lightBlue hover:text-theme-lightBlue hover:bg-white duration-250">
                    More Info
                </a>
            </div>
        </section>
    );
};

export default Faq;
