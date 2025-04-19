import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">Education</h2>

      {/* Master's Degree */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-textLight dark:text-textDark">
          Binghamton University, State University of New York
        </h3>
        <p className="text-sm italic text-meta dark:text-metaDark">
          Master of Science in Computer Science | Jan 2024 – Dec 2025 (Expected)
        </p>
        <p className="text-sm italic text-meta dark:text-metaDark mb-2">
          GPA: 3.65/4.00
        </p>
        <p className="text-base text-textLight dark:text-textDark">
          Relevant Coursework: Design and Analysis of Algorithms, Machine Learning,
          Distributed Systems, Design Patterns, Programming Systems and Tools,
          Database Systems, Data Mining, Cloud Computing
        </p>
      </div>

      {/* Undergraduate Degree */}
      <div>
        <h3 className="text-xl font-semibold text-textLight dark:text-textDark">
          ICFAI University
        </h3>

        <p className="text-sm italic text-meta dark:text-metaDark">
          Bachelor of Science in Computer Science | Aug 2019 – Jun 2023
        </p>
        <p className="text-sm italic text-meta dark:text-metaDark mb-2">
          GPA: 7.15/10.00
        </p>
        <p className="text-base text-textLight dark:text-textDark">
          Relevant Coursework: Big Data, Database Management Systems, Data Visualization, 
          Computer Networks, Python Programming, Java Programming, Data Structures & Algorithms
        </p>
      </div>
    </section>
  );
};

export default Education;
