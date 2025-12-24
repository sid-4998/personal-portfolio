import { useState, useEffect } from "react";
import { projects } from "../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills and
          experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`
              h-full flex flex-col rounded-2xl bg-gray-900 border border-white/10
              shadow-xl cursor-pointer transition-all duration-300
              ${!selectedProject && "hover:-translate-y-2 hover:shadow-purple-500/40"}
              active:translate-y-0
            `}
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags aligned bottom */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
            
            {/* Close Button */}
            <div className="sticky top-0 bg-gray-900 z-10 flex justify-end p-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Image */}
            <div className="px-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-300px object-contain rounded-xl"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-6 py-2 rounded-xl text-center font-semibold"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-center font-semibold"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Projects };
