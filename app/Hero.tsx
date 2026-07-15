import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#DCEEFF] via-[#F4F9FF] to-white py-24 ">
      <h1 className="text-5xl md:text-7xl font-serif max-w-4xl mx-auto leading-[1.05] mb-6 tracking-tight">
        Sustainability insights, built for business
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto mb-10 font-normal">
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
        <Button variant="primary">Request a demo</Button>
        <Button variant="secondary">Explore the platform</Button>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-[32px] border border-gray-200 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] text-left">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold tracking-tight">Good morning, Acme Inc</h3>
          <p className="text-gray-500 mt-1">Your daily impact metrics are ready to review.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">182,000 tCO2e</p>
              <div className="text-4xl font-semibold mt-2">56%</div>
            </div>
            <div className="w-16 h-16 bg-[#faff00] rounded-lg" />
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Energy consumption</p>
            <div className="flex items-baseline gap-4 mt-2">
              <span className="text-4xl font-semibold">583.7</span>
              <span className="text-sm text-gray-400">MWh</span>
            </div>
            <p className="text-xs text-blue-500 mt-2 font-medium">↓ 2.4%</p>
          </div>

          <div className="bg-[#1a1a1a] text-white p-6 rounded-2xl flex items-start gap-4">
            <div className="w-16 h-16 bg-[#3a5e3a] rounded-lg" />
            <div>
              <p className="text-[10px] text-[#faff00] uppercase font-bold tracking-widest">Forecast</p>
              <p className="text-sm mt-1 leading-snug">You are 18% off your 2027 emissions goal</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Carbon emissions trend</p>
          <div className="h-48 flex items-end gap-[6px] px-2 relative">
             <div className="absolute top-0 left-[55%] -translate-x-1/2 bg-[#faff00] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">229</div>
             
             {[40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 95, 100, 110, 120, 130, 140, 150, 160, 170, 200, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80].map((h, i) => (
                <div key={i} className="flex-1 bg-gray-800 rounded-t-sm" style={{ height: `${(h/220)*100}%` }} />
             ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
