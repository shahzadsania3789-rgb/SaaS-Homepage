import Button from "./Button";
import React from 'react';

// You can swap these paths with your local folder paths (e.g., "./image_3fc4c5.jpg")
const articles = [
    { 
        title: 'How to Build a Climate-Ready Data Stack', 
        category: 'Insights', 
        time: '4 min', 
        img: './images/img0.png'  // <-- Update this path
    },
    { 
        title: "Sustainability Isn't a Side Project: Making Impact Operational", 
        category: 'Strategy', 
        time: '7 min', 
        img: './images/image1.png' // <-- Update this path
    },
    { 
        title: 'Inside the Aetherfield Model: How We Turn Data Into Action', 
        category: 'Insights', 
        time: '5 min', 
        img: './images/image2.png' // <-- Update this path
    },
];

const JournalBadge = () => (
    <svg viewBox="0 0 400 160" className="w-full max-w-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M200 10L390 80L200 150L10 80L200 10Z" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <text x="200" y="75" textAnchor="middle" className="text-2xl font-semibold fill-blue-500 font-serif" style={{ fontSize: '24px' }}>Aetherfield</text>
        <text x="200" y="105" textAnchor="middle" className="text-2xl font-semibold fill-blue-500 font-serif" style={{ fontSize: '24px' }}>Journal</text>
        <text x="200" y="125" textAnchor="middle" className="text-sm fill-blue-500">®</text>
        <text x="70" y="90" transform="rotate(-20 70 90)" className="text-sm fill-blue-500 uppercase tracking-widest font-medium">tech</text>
        <text x="200" y="35" textAnchor="middle" className="text-sm fill-blue-500 uppercase tracking-widest font-medium">earth</text>
        <text x="330" y="70" transform="rotate(20 330 70)" className="text-sm fill-blue-500 uppercase tracking-widest font-medium">data</text>
    </svg>
);

export default function JournalSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                {/* Left side: Rotated Badge */}
                <div className="w-full md:w-1/3 md:-mt-12 md:-ml-12 -rotate-[10deg]">
                    <JournalBadge />
                </div>
                
                {/* Right side: Article List */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-serif mb-12">From the journal</h2>
                    <div className="border-t border-gray-100">
                        {articles.map((article, i) => (
                            <div key={i} className="flex items-center gap-6 py-8 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
                                <img src={article.img} alt={article.title} className="w-24 h-16 rounded-lg object-cover bg-gray-100" />
                                <div>
                                    <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">{article.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{article.category} · {article.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <button className="px-6 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-all">
                            View all articles
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}