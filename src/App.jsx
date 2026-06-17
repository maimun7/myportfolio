import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
// import useScrollAnimate from "./useScrollAnimate";
// import "./animate.css";
import "./App.css";

function App() {
// // Activates scroll animations for ALL [data-animate] elements
//   useScrollAnimate();
  return (
    <div className="container">
      <Sidebar />

      <main className="content">
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;



