import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiSass,
  SiTailwindcss,
  SiVite,
  SiMarkdown,
  SiVercel,
  SiGithub,
  SiFigma,
  SiNpm,
  SiPostman,
  SiRedux,
  SiReactquery,
  SiReactrouter,
  SiReacthookform,
  SiGithubpages,
} from "react-icons/si";
import { FaGit, FaWindows } from "react-icons/fa";
import { DiTerminal } from "react-icons/di";
import { SiPowershell, SiObsidian } from "react-icons/si";
import { IoMdCheckboxOutline, IoMdChatbubbles } from "react-icons/io";

import "./SkillIcons.css";

const skills = [
  {
    category: "Web Stack",
    icons: [
      { icon: <SiHtml5 />, name: "HTML5", className: "html5" },
      { icon: <SiCss3 />, name: "CSS3", className: "css3" },
      { icon: <SiJavascript />, name: "JavaScript", className: "javascript" },
      { icon: <SiTypescript />, name: "TypeScript", className: "typescript" },
      { icon: <SiReact />, name: "React", className: "react" },
      { icon: <SiBootstrap />, name: "Bootstrap", className: "bootstrap" },
      { icon: <SiSass />, name: "SASS", className: "sass" },
      { icon: <SiTailwindcss />, name: "TailwindCSS", className: "tailwindcss" },
      { icon: <SiVite />, name: "Vite", className: "vite" },
      { icon: <SiMarkdown />, name: "Markdown", className: "markdown" },
    ],
  },
  {
    category: "Cloud & Hosting",
    icons: [
      { icon: <SiVercel />, name: "Vercel", className: "vercel" },
      { icon: <SiGithubpages />, name: "GitHub Pages", className: "githubpages" },
    ],
  },
  { category: "Design & UI", icons: [{ icon: <SiFigma />, name: "Figma", className: "figma" }] },
  {
    category: "DevOps & Tools",
    icons: [
      { icon: <SiNpm />, name: "NPM", className: "npm" },
      { icon: <SiGithub />, name: "GitHub", className: "github" },
      { icon: <FaGit />, name: "Git", className: "git" },
      { icon: <SiPostman />, name: "Postman", className: "postman" },
    ],
  },
  {
    category: "Miscellaneous",
    icons: [
      { icon: <FaWindows />, name: "Windows", className: "windows" },
      { icon: <DiTerminal />, name: "Terminal", className: "terminal" },
      { icon: <SiPowershell />, name: "PowerShell", className: "powershell" },
      { icon: <SiObsidian />, name: "Obsidian", className: "obsidian" },
    ],
  },
  {
    category: "State Management",
    icons: [
      { icon: <SiRedux />, name: "Redux", className: "redux" },
      { icon: <SiReactquery />, name: "React Query", className: "reactquery" },
      { icon: <SiReactrouter />, name: "React Router", className: "reactrouter" },
      { icon: <SiReacthookform />, name: "React Hook Form", className: "reacthookform" },
    ],
  },
];
const SkillIcons = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? "" : category);
  };

  return (
    <section className="bio">
      <h3 className="bio--about__title">
        <IoMdChatbubbles className="custom-chat" /> Tech Stack
      </h3>
      {skills.map((category, index) => (
        <div key={index} className="bio--about">
          <div className="skills-header" onClick={() => handleCategoryClick(category.category)}>
            <h6 className={`bio--skills__title-2`}>
              <IoMdCheckboxOutline className="custom-checkbox" /> {category.category}:
            </h6>
          </div>
          {activeCategory === category.category && (
            <div className="skills-container">
              {category.icons.map((skill, idx) => (
                <div key={idx} className={`skill-icon ${skill.className}`}>
                  {skill.icon}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default SkillIcons;
