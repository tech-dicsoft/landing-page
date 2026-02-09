const CORE_TEAM = [
  { name: "Marco Duong", role: "Tech Lead" },
  { name: "Chavis Nguyen", role: "Mobile / Full-stack" },
  { name: "Louis Luong", role: "Web" },
  { name: "Tyler Nguyen", role: "DevOps" },
  { name: "Hong Nguyen", role: "Designer" },
];

const YEARS_EXPERIENCE = new Date().getFullYear() - 2020;

export default function AboutUs(): React.ReactElement {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-dic-blue-dark mb-6">About Us</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          With over <strong className="text-dic-blue">{YEARS_EXPERIENCE} years</strong> of experience, we have
          successfully delivered <strong className="text-dic-blue">10+ products</strong> and built
          a core team of <strong className="text-dic-blue">5 senior experts</strong> dedicated to
          digital innovation and quality software delivery.
        </p>
        <h3 className="text-lg font-semibold text-dic-blue mb-4">Core Team</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {CORE_TEAM.map((member) => (
            <li
              key={member.name}
              className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
            >
              <span className="w-2 h-2 rounded-full bg-dic-cyan shrink-0" />
              <span className="font-medium text-gray-800">{member.name}</span>
              <span className="text-gray-500 text-sm">— {member.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
