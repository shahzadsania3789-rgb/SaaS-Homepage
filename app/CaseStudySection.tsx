import Button from "./Button";

const CaseStudySection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto border border-gray-200 p-8 md:p-12 rounded-[32px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="./images/case-study.png" 
            alt="Team collaboration" 
            className="w-full h-80 object-cover rounded-2xl"
          />
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium text-gray-900">Why Acme Inc chose Aetherfield</h3>
            <p className="text-gray-600 leading-relaxed">With fragmented data and growing reporting pressure, Acme turned to Aetherfield to streamline their ESG workflows. The result? Faster decisions, fewer spreadsheets, and 34% more coverage.</p>
            <Button variant="dark">Read case study</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
