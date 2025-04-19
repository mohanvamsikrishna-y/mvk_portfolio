const Projects = () => {
  const projects = [
    {
      title: "U.S. Political Figures Analysis",
      description:
        "Built a Django & MongoDB-powered platform to analyze presidential terms and U.S. legislative trends using open data APIs.",
    },
    {
      title: "Automated Sales ETL Pipeline",
      description:
        "Created a Python-based serverless ETL pipeline using AWS Lambda and S3 to automate and validate sales reporting.",
    },
    {
      title: "Distributed Cloud-Based Chat Application",
      description:
        "Deployed a two-tier real-time chat system on Google Cloud Platform using Flask, MongoDB, and Socket.IO. Used Docker for containerization and implemented load balancing for scalability.",
    },
    {
      title: "Reinforcement Learning-based Cluster Formation in Ad-hoc Networks",
      description:
        "Implemented reinforcement learning to dynamically form clusters in mobile ad-hoc networks using PyTorch. Simulated communication protocols and agent behaviors in NS-3.",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-accent text-center font-sans">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg bg-soft shadow-md hover:shadow-glow transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold font-sans !text-textLight">
              {proj.title}
            </h3>
            <p className="mt-2 text-sm font-sans !text-textLight">
              {proj.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
