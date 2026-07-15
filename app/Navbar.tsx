import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Navbar = () => (
  <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center  bg-[#DCEEFF]/30">
    <div className="font-bold text-xl tracking-tighter">Aetherfield</div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-900">
      {['Product', 'Journal', 'About', 'Careers'].map(link => (
        <a key={link} href="#" className="hover:text-blue-600 transition-colors">{link}</a>
      ))}
    </div>
    <div className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:underline">
      Get started <ArrowRight size={16} />
    </div>
  </nav>
);
export default Navbar;
