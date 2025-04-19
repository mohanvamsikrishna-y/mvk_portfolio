import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-4 pl-4 md:pl-12"> {/* Adjusted padding here */}
            <h2 className="text-3xl font-bold text-accent">About Me</h2>
            <p className="text-meta dark:text-metaDark leading-relaxed">
              I specialize in software development and data analysis, with hands-on expertise
              in Python, SQL, and data visualization tools. My experience includes building
              scalable data pipelines, integrating AI models, and designing intuitive dashboards
              that support informed decision-making. With a solid foundation in backend engineering
              and analytical problem-solving, I leverage cloud technologies and advanced data
              processing methods to streamline workflows and enhance performance. Passionate about
              extracting insights from complex datasets, I strive to deliver innovative technologies
              that drive efficiency, growth, and meaningful outcomes.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src="/mohan.png"
              alt="Mohan Vamsi Krishna"
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-2 border-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
