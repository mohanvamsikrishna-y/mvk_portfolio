import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">Experience</h2>

      {/* Binghamton University IT Assistant */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-textLight dark:text-textDark">
          Binghamton University – IT Services, Student Assistant
        </h3>
        <p className="italic text-sm text-meta dark:text-metaDark">
          Jan 2025 – Present | Binghamton, NY
        </p>
        <ul className="list-disc list-inside text-textLight dark:text-textDark mt-2 space-y-2">
          <li>
            Provide front-line technical support for faculty and students, resolving hardware/software issues and improving accessibility across campus.
          </li>
          <li>
            Assist with system configurations and basic security maintenance to ensure consistent IT uptime and reliability.
          </li>
        </ul>
      </div>

      {/* National Informatics Centre */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-textLight dark:text-textDark">
          National Informatics Centre – Software Developer Intern
        </h3>
        <p className="italic text-sm text-meta dark:text-metaDark">
          Jan 2023 – Jun 2023 | Hyderabad, India
        </p>
        <ul className="list-disc list-inside text-textLight dark:text-textDark mt-2 space-y-2">
          <li>
            Developed a privacy-focused document processing app for Indian government officials using Python, Django, and SQLite,
            reducing manual workload and file processing time by 40%.
          </li>
          <li>
            Optimized backend architecture to enable 5x faster document processing for over 100,000 documents,
            boosting user engagement from 200 to 600 weekly active users.
          </li>
          <li>
            Built ETL pipelines (Python & SQL) for TejasVI, integrating 5+ public data sources and automating validation rules, improving processing time by 40%.
          </li>
          <li>
            Integrated GIS layers from Bharat Maps to enhance spatial reporting; enabled 25% faster analytics for policymakers via drag-and-drop dashboards.
          </li>
        </ul>
      </div>

      {/* KlassPM - Merged Experience */}
      <div>
        <h3 className="text-xl font-semibold text-textLight dark:text-textDark">
          KlassPM Educational Consultancy – Data Analysis & IT Intern
        </h3>
        <p className="italic text-sm text-meta dark:text-metaDark">
          Jun 2021 – Aug 2021 | Hyderabad, India
        </p>
        <ul className="list-disc list-inside text-textLight dark:text-textDark mt-2 space-y-2">
          <li>
            Developed RESTful Flask APIs and integrated PostgreSQL databases to manage student performance data and course content retrieval.
          </li>
          <li>
            Designed an A/B testing framework in Python to analyze engagement across 3 core curriculum modules, guiding data-driven improvements.
          </li>
          <li>
            Built interactive dashboards in Power BI to visualize student engagement, turning raw metrics into actionable insights for content strategy.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
