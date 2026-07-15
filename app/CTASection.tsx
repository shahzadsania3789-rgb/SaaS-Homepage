import Button from "./Button";


const CTASection = () => (
    <section className="py-24 px-6 bg-[#F9F9F9] flex flex-col items-center justify-center text-center">
        <h2 className="text-xl md:text-3xl font-medium text-black mb-10 tracking-tight whitespace-nowrap">
            Ready to operationalize your sustainability goals?
        </h2>
        <button className="bg-black text-white px-6 py-3 font-medium flex items-center gap-2 hover:bg-gray-800 transition-all">
            <span>▪</span> Request a demo
        </button>
    </section>
);
export default CTASection;