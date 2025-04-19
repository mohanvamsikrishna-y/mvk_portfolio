const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-screen"
    >
      <h1 className="text-5xl font-newyork font-normal text-black dark:text-white">
        Mohan Vamsi Krishna Yanamadala
      </h1>



      <p className="text-xl text-gray-700 max-w-2xl">
      Software & Data Engineering | Analytics


      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {["Python", "SQL", "Tableau", "GCP", "Docker", "MongoDB", "Pandas"].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-soft text-primary rounded-full text-sm font-medium shadow"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
