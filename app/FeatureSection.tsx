import { Sparkles } from "lucide-react";
import React from "react";
import Button from "./Button";

const FeaturesSection = () => {
  const features = [
    { title: 'Track', desc: 'Emissions, energy, and waste across your value chain', id: '001' },
    { title: 'Model', desc: 'Forecast performance and goal alignment', id: '002' },
    { title: 'Report', desc: 'Generate ESG disclosures, automate frameworks', id: '003' },
    { title: 'Act', desc: 'Surface insights and operational next steps', id: '004' },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-20 tracking-tight leading-[1.1]">
        Everything you need to measure,<br />model, and act on sustainability
      </h2>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Visual Side */}
        <div className="bg-gray-100 rounded-3xl h-[400px] md:h-[500px] relative overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-blue-100/50 mix-blend-multiply" />
            {/* The Metric Card */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl w-full max-w-sm border border-white/50 shadow-2xl relative z-10">
                <div className="flex justify-between items-start">
                    <p className="text-sm font-medium text-gray-500">Energy consumption</p>
                    <Sparkles className="text-gray-400" size={24} />
                </div>
                <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold">583.7</span>
                    <span className="text-sm text-gray-400">MWh</span>
                </div>
                <p className="text-xs text-blue-500 mt-2 font-medium">↓ 12.4%</p>
            </div>
        </div>

        {/* Content Side */}
        <div className="space-y-8">
          {features.map((f) => (
            <div key={f.id} className="border-b border-gray-200 pb-8 last:border-0">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{f.title}</h3>
                    <span className="text-sm text-gray-400 font-mono">{f.id}</span>
                </div>
                <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
          <div className="pt-4">
            <Button variant="dark">Explore features</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
