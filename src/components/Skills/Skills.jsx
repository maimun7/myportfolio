// import "./skills.css";

// const skills = [
//   "JavaScript",
// //   "TypeScript",
//   "React",

//   "HTML & CSS",
// //   "Node.js",
//   "Git & GitHub",

//   "Tailwind CSS",
//   "REST APIs",
//   "Responsive Design",
//   "Accessibility (a11y)",
//   "VS Code",

// ];

// export default function skills() {
//   return (
//     <div className="skills">
//       <p className="section-label">skills &amp; Technologies</p>

//       <div className="skills-grid">
//         {skills.map((tool) => (
//           <span key={tool} className="tool-tag">
//             {tool}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }





// import "./skills.css";

// import jsIcon from "../../assets/elon.png";
// // import reactIcon from "../../assets/react.png";
// // import htmlIcon from "../../assets/html.png";
// // import gitIcon from "../../assets/github.png";
// import reactIcon from "../../assets/elon.png";
// import htmlIcon from "../../assets/elon.png";
// import gitIcon from "../../assets/elon.png";

// const skills = [
//   {
//     name: "JavaScript",
//     image: jsIcon,
//   },
//   {
//     name: "React",
//     image: reactIcon,
//   },
//   {
//     name: "HTML & CSS",
//     image: htmlIcon,
//   },
//   {
//     name: "Git & GitHub",
//     image: gitIcon,
//   },
// ];

// export default function skills() {
//   return (
//     <div className="skills">
//       <p className="section-label">
//         Skills & Technologies
//       </p>

//       <div className="skills-grid">
//         {skills.map((tool) => (
//           <div key={tool.name} className="tool-card">

//             <span className="tool-name">
//               {tool.name}
//             </span>

//             <img
//               src={tool.image}
//               alt={tool.name}
//               className="tool-image"
//             />

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import "./skills.css";

import reactIcon from "../../assets/react.svg";
import jsIcon from "../../assets/javascript.svg";
import javaIcon from "../../assets/java.svg";
import springIcon from "../../assets/spring.svg";

import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
// import tailwindIcon from "../../assets/tailwind.svg";

// import nodeIcon from "../../assets/nodejs.svg";
// import expressIcon from "../../assets/express.svg";
// import apiIcon from "../../assets/api.svg";

// import mongoIcon from "../../assets/mongodb.svg";
import mysqlIcon from "../../assets/mysql.svg";

// import gitIcon from "../../assets/git.svg";
import githubIcon from "../../assets/githublogo1.png";
import vscodeIcon from "../../assets/vscode.svg";
// import postmanIcon from "../../assets/postman.svg";

const SKILLS = {
  Frontend: [
    { name: "React", icon: reactIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    // { name: "Tailwind", icon: tailwindIcon },
  ],

  Backend: [
    { name: "Java", icon: javaIcon },
    { name: "Spring", icon:  springIcon},
    // { name: "REST API", icon: apiIcon },
  ],

  Database: [
    // { name: "MongoDB", icon: mongoIcon },
    { name: "MySQL", icon: mysqlIcon },
  ],

  Tools: [
    { name: "VS Code", icon: vscodeIcon },
    // {name: "IntelliJ IDEA", icon:s}
    // { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    
    // { name: "Postman", icon: postmanIcon },
  ],
  
};

export default function skills() {
  return (
    <div className="skills">

      <p className="section-label">
        Skills & Technologies
      </p>

      {Object.entries(SKILLS).map(([category, items]) => (
        <div key={category} className="skills-category">

          <h3>{category}</h3>

          <div className="skills-grid">

            {items.map((item) => (
              <div key={item.name} className="tool-card">

                <img
                  src={item.icon}
                  alt={item.name}
                  className="tool-icon"
                />

                <span className="tool-name">
                  {item.name}
                </span>

              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  );
}