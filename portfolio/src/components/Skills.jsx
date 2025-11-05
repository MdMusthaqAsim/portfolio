import React from "react";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaBrain,
  FaChartBar,
  FaCodeBranch,
} from "react-icons/fa";

const skills = [
  {
    name: "Frontend",
    icon: <FaLaptopCode size={32} />,
    items: ["React.js", "Tailwind CSS", "Framer Motion", "Redux", "HTML", "CSS", "JavaScript (ES6+)"],
  },
  {
    name: "Backend",
    icon: <FaServer size={32} />,
    items: ["Spring Boot", "Node.js", "Express.js", "Swagger UI", "OAuth2"],
  },
  {
    name: "Databases",
    icon: <FaDatabase size={32} />,
    items: ["MySQL", "Oracle", "MongoDB", "Neo4j", "Redis"],
  },
  { 
    name: "AI & ML", 
    icon: <FaBrain size={32} />, 
    items: ["YOLO", "Computer Vision", "Model Optimization"] 
  },
  {
    name: "Tools & DevOps",
    icon: <FaCodeBranch size={32} />,
    items: ["Git", "GitHub", "Clerk API"],
  },
  {
    name: "Visualization & Analytics",
    icon: <FaChartBar size={32} />,
    items: ["Tableau"],
  },
  {
    name: "Languages",
    icon: <FaCode size={32} />,
    items: ["Java", "Python", "SQL", "PL/SQL", "Cypher"],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-gray-900">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {skill.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
                  >
                    <FaCodeBranch size={16} className="text-gray-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
