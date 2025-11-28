const projects = [
  { title: "Project 1", link: "https://github.com/user/project1" },
  { title: "Project 2", link: "https://github.com/user/project2" }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      {projects.map((p, index) => (
        <div key={index} className="project-card">
          <h3>{p.title}</h3>
          <a href={p.link} target="_blank">View on GitHub</a>
        </div>
      ))}
    </section>
  );
}