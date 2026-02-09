import projects from "../data/projects.json";

export default function Portfolio(): React.ReactElement {
  return (
    <section id="stories" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-dic-blue-dark mb-8">
          Highlighted Stories
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-dic-cyan/40 transition-colors"
            >
              <h3 className="font-semibold text-dic-blue mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              {(project.location || project.stack.length > 0) && (
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.location && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-gray-600">
                      {project.location}
                    </span>
                  )}
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-dic-cyan/10 text-dic-cyan font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
