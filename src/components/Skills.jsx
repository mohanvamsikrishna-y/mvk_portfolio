import React from "react";

const Skills = () => {
  const skillGroups = {
    Languages: ["Python", "SQL", "Java", "C++"],
    Platforms: ["AWS", "GCP", "Oracle", "MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    Frameworks: [
      "Flask", "Django", "LangChain API", "PyTorch",
      "TensorFlow", "Pandas", "NumPy", "PySpark"
    ],
    Tools: [
      "Git", "Docker", "Kubernetes", "Google Looker Studio",
      "Power BI", "Tableau", "Excel", "Quicksight"
    ],
    Concepts: [
      "ETL", "Data Warehousing", "Data Pipelines",
      "AI Model Integration", "Statistical Analysis", "Distributed Systems"
    ]
  };

  return (
    <section id="skills" className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-accent">Skills</h2>
      </div>
      <div className="flex flex-col items-center gap-10">
        {Object.entries(skillGroups).map(([category, skills]) => (
          <div key={category} className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-textLight dark:text-textDark">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm shadow-glow hover:shadow-md transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
