const Contact = () => {
  return (
    <section id="contact" className="pt-8 pb-1 px-4 max-w-2xl mx-auto text-center">

      <h2 className="text-3xl font-bold mb-6 text-accent">Get in Touch</h2>
      <p className="text-base text-textLight dark:text-textDark mb-6">
        Feel free to connect with me on LinkedIn or shoot me an email for opportunities, collaborations, or a chat!
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/ymvk/"
          className="text-accent font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:myanamadala@binghamton.edu"
          className="text-accent font-medium hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/mohanvamsikrishna-y"
          className="text-accent font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
