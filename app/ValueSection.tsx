import Button from "./Button";
import { ArrowRight, Globe, Target, ArrowUpRight } from "lucide-react";


const Navbar = () => (
  <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-[#e0efff]/30">
    <div className="font-bold text-2xl tracking-tighter text-black">Aetherfield</div>
    <div className="hidden md:flex gap-10 text-sm font-semibold text-gray-900">
      {['Product', 'Journal', 'About', 'Careers'].map((link) => (
        <a key={link} href="#" className="hover:text-blue-600 transition-colors">{link}</a>
      ))}
    </div>
    <div className="flex items-center gap-1 text-sm font-semibold cursor-pointer hover:underline text-black">
      Get started <ArrowRight size={16} />
    </div>
  </nav>
);

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#e0efff]/30 to-white pt-16 pb-20 px-6 text-center">
      <h1 className="text-5xl md:text-[80px] font-serif max-w-5xl mx-auto leading-[1.05] mb-6 tracking-tight text-gray-900">
        Sustainability insights,<br />built for business
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
        Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
        <Button variant="primary">Request a demo</Button>
        <Button variant="secondary">Explore the platform</Button>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Clarity drives action',
      desc: 'We believe better decisions start with better data—measured, visible, and trusted.'
    },
    {
      icon: Globe,
      title: 'Sustainability is a systems problem',
      desc: 'We build tools that help teams connect the dots between operations, impact, and accountability.'
    },
    {
      icon: ArrowUpRight,
      title: 'Progress over perfection',
      desc: 'We support real-world momentum—helping organizations move from ambition to measurable change.'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F2EC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-center mb-16 tracking-tight leading-tight text-gray-900">
          Built for clarity<br />Designed for action
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center mb-8">
                <val.icon size={20} className="text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{val.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ValuesSection;