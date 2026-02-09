const SERVICES = [
  {
    title: "DevOps Development & Maintenance",
    description: "CI/CD pipelines, infrastructure as code, and ongoing operations support.",
  },
  {
    title: "AI/ML Consulting & Engineering",
    description: "From strategy to deployment of machine learning and AI solutions.",
  },
  {
    title: "Custom Web/Mobile App Development",
    description: "Tailored applications for web and mobile with modern tech stacks.",
  },
];

const TARGET_INDUSTRIES = ["Manufacturing", "FinTech", "SaaS", "Healthcare"];

export default function Services(): React.ReactElement {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-dic-blue-dark mb-8">Services</h2>
        <div className="space-y-6 mb-10">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
            >
              <h3 className="font-semibold text-dic-blue mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-gray-500 mb-3">Target industries</p>
        <div className="flex flex-wrap gap-2">
          {TARGET_INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="px-3 py-1.5 rounded-full bg-dic-cyan/10 text-dic-cyan text-sm font-medium"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
