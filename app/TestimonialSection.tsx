import  Button from './Button';

import React from 'react';

const TestimonialSection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-white flex justify-center items-center">
            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-16 items-center">
                {/* Left side: Blue Duotone Portrait */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full aspect-square bg-[#A7D3FF] overflow-hidden rounded-2xl">
                        {/* Replace this img src with your local file path, e.g., "./your-portrait.png" */}
                        <img 
                            src="./images/TestimonialPortrait.png" 
                            alt="Elliot Williams" 
                            className="w-full h-full object-cover mix-blend-multiply opacity-90"
                        />
                    </div>
                </div>

                {/* Right side: Quote */}
                <div className="w-full md:w-1/2 space-y-8">
                    <div className="text-blue-500 text-6xl font-serif">“</div>
                    <blockquote className="text-3xl md:text-4xl font-serif leading-tight text-gray-900 tracking-tight">
                        We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions.
                    </blockquote>
                    <div>
                        <p className="font-semibold text-lg text-gray-900">Elliot Williams</p>
                        <p className="text-gray-500">Head of Sustainability, Flux Materials</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TestimonialSection;