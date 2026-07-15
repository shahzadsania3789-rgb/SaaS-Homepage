import Button from "./Button";

const Footer = () => (
    <footer className="bg-yellow-300 border-4 border-green-500 p-8 flex flex-col gap-8">
        {/* Nav & Copyright */}
        <div className="flex justify-between items-start text-sm text-black">
            <nav className="flex gap-6 font-medium">
                {['Product', 'Journal', 'About', 'Careers', 'Get started'].map(item => (
                    <a key={item} href="#" className="hover:underline">{item}</a>
                ))}
            </nav>
            <div className="text-black/60">
                © 2025 · All rights reserved
            </div>
        </div>

        {/* Textured Image Area */}
        <div className="w-full h-48 bg-[#a3a300] overflow-hidden">
            <img 
                src="./images/FooterTexture.png" // Placeholder, update this to your specific texture image
                alt="Texture" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80" 
            />
        </div>

        {/* Branding */}
        <div className="text-7xl md:text-9xl font-black text-[#4d4d29]">
            Aetherfield
        </div>
    </footer>
);
export default Footer;