import "./About.css";

export default function About() {
  return (
    <div className="about">
      <p className="section-label">About</p>

      <div className="about-text">
        <p>
          {/* I'm a frontend developer with a passion for building{" "}
          <strong>accessible, pixel-perfect user interfaces</strong>. I take pride in
          crafting thoughtful, inclusive products and have a sharp eye for the little
          details that elevate user experience. I do my best work at the intersection
          of design and engineering, where great UX meets clean, scalable code. */}
          {/* I’m a full stack developer passionate about building <strong>modern, responsive, and user-friendly web applications</strong>. I enjoy turning ideas into real-world projects by combining clean frontend design with powerful backend functionality. */}
          I'm a full stack developer focused on building modern, responsive, and scalable web applications from the ground up from database design to polished, user-friendly interfaces. I work across the stack using React for dynamic frontends and Java with Spring Boot for robust, secure backend systems, connected through clean RESTful APIs and MySQL databases.
        </p>
        <p>
          {/* I specialize in creating seamless user experiences using modern technologies and frameworks while focusing on clean, maintainable, and scalable code. I love learning new technologies, improving my development skills, and building projects that solve real problems. */}
          I care about writing code that's not just functional, but maintainable and built to grow whether that means structuring components for reusability, optimizing database queries, or ensuring an interface feels intuitive on any device. I'm comfortable owning a project end-to-end: planning the architecture, building both layers, and deploying a working product.
        </p>
        <p>
         {/* Outside of coding, I enjoy exploring new tech, working on personal projects, and continuously challenging myself to grow as a developer. */}
         Beyond the core stack, I'm continuously expanding my skill set currently exploring TypeScript, cloud deployment, and modern AI-assisted development workflows to keep my work aligned with where the industry is heading. Outside of coding, I enjoy exploring new tools, contributing to personal projects, and pushing myself to build things that solve real problems.
        </p>
      </div>
    </div>
  );
}