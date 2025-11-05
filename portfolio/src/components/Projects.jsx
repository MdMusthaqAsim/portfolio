import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "RemuriaForHSR",
    description:
      "A user profile database, analysis, and ranking system for Honkai: Star Rail. Focused on improving UI/UX and analytics from the previous prototype 'Re-muria'. Integrated player stats, relic data, and leaderboard analytics with an MVC architecture for modular scalability.",
    tags: [
      "Spring Boot",
      "Swagger UI",
      "OAuth2",
      "React.js",
      "Framer Motion",
      "TailwindCSS",
      "Redux",
      "Neo4j",
      "MongoDB",
    ],
    github: "https://github.com/Amphorous/RemuriaForHSR",
  },
  {
    id: 2,
    title: "Remuria",
    description:
      "A player profile and ranking dashboard for Genshin Impact, allowing users to view and compare character stats and relic data. Built with a modular architecture and responsive UI for seamless navigation and analytics.",
    tags: [
      "Spring Boot",
      "Swagger UI",
      "React.js",
      "Framer Motion",
      "TailwindCSS",
      "MongoDB",
    ],
    github: "https://github.com/Amphorous/Re-muria",
  },
  {
    id: 3,
    title: "8-Hills",
    description:
      "A scalable platform for property management that enables smooth interaction between tenants and landowners. Features rental requests, approvals, and account management via a secure, user-friendly interface.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Clerk API"],
    github: "https://github.com/MdMusthaqAsim/CapFront",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(1);
  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className={`px-6 py-4 text-left rounded-lg transition-all whitespace-nowrap md:whitespace-normal ${
                    activeProject === project.id
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <h3 className="font-semibold">{project.title}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="md:w-2/3">
            {currentProject && (
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      <FaGithub size={18} />
                      <span>View</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
