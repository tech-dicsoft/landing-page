const COMMITMENTS = [
  "Project transparency from the ground",
  "Strict time control and delivery",
  "Accurate cost management",
  "IP and data security",
  "Expert support throughout",
];

export default function WhyUs(): React.ReactElement {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-dic-blue-dark mb-6">Why Us</h2>
        <p className="text-lg font-semibold text-dic-cyan mb-2">
          Lean team · Lean approach · Lean procedure
        </p>
        <p className="text-gray-600 mb-8">
          We keep processes simple and efficient so your project stays on track without waste.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-8">
          <h3 className="font-semibold text-dic-blue mb-2">Making projects transparent from the ground</h3>
          <p className="text-gray-600 text-sm">
            From day one, we align on scope, timeline, and progress so you always know where things stand.
          </p>
        </div>

        <ul className="space-y-2 mb-8">
          {COMMITMENTS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-gray-700">
              <span className="text-dic-cyan">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="p-4 rounded-xl bg-dic-cyan/10 border border-dic-cyan/20">
          <h3 className="font-semibold text-dic-blue-dark mb-2">Win-win mindset</h3>
          <p className="text-gray-700 text-sm">
            Your success is our success. We are invested in delivering outcomes that help your business grow,
            so we share the same goals and work as a true partner.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-dic-cyan">100%</p>
            <p className="text-sm text-gray-500">Projects delivered successfully</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-dic-cyan">100%</p>
            <p className="text-sm text-gray-500">Client satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
