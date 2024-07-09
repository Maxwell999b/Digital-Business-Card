import { IoMdChatbubbles } from "react-icons/io";
import P1 from "/assets/1.png";
import P1copy from "/assets/1-2.png";
import P2 from "/assets/2.png";
import P2copy from "/assets/2-2.png";
import P3 from "/assets/3.png";
import P3copy from "/assets/3-2.png";
import P4 from "/assets/4.png";
import P4copy from "/assets/4-2.png";

import "./Projects.css";

const Projects = () => (
  <section className="projects">
    <h3 className="projects--title">
      <IoMdChatbubbles className="custom-chat" /> Projects
    </h3>
    <div className="projects--grid">
      <a href="https://anime-cards-anime-gogo-tv.vercel.app/" target="_blank" className="projects--card">
        <img src={P1} alt="Project 1: Anime GOGO TV" className="projects--image" />
        <img src={P1copy} alt="Project 1: Anime GOGO TV" className="projects--image-hover" />
        <div className="projects--overlay">
          <p className="projects--text">
            <a
              href="https://github.com/Maxwell999b/Anime-Cards-Anime-GOGO-TV"
              target="_blank"
              className="projects--card">
              Anime GOGO TV
            </a>
          </p>
        </div>
      </a>

      <a href="https://pixel-store-seven.vercel.app/" target="_blank" className="projects--card">
        <img src={P2} alt="Project 2: Pixel Store" className="projects--image" />
        <img src={P2copy} alt="Project 2: Pixel Store" className="projects--image-hover" />
        <div className="projects--overlay">
          <p className="projects--text">
            <a href="https://github.com/Maxwell999b/pixel-store" target="_blank" className="projects--card">
              Pixel Store
            </a>
          </p>
        </div>
      </a>

      <a href="https://maxwell999b.github.io/Front-End-Portfolio/" target="_blank" className="projects--card">
        <img src={P3} alt="Project 4: Simple Portfolio" className="projects--image" />
        <img src={P3copy} alt="Project 4: Simple Portfolio" className="projects--image-hover" />
        <div className="projects--overlay">
          <p className="projects--text">
            <a href="https://github.com/Maxwell999b/Front-End-Portfolio" target="_blank" className="projects--card">
              Simple Portfolio
            </a>
          </p>
        </div>
      </a>

      <a
        href="https://addons.mozilla.org/en-US/firefox/addon/midnight-radiance-theme/"
        target="_blank"
        className="projects--card">
        <img src={P4} alt="Project 3: Midnight Radiance Theme -firefox theme" className="projects--image" />
        <img src={P4copy} alt="Project 3: Midnight Radiance Theme -firefox theme" className="projects--image-hover" />
        <div className="projects--overlay">
          <p className="projects--text">
            <a href="https://github.com/Maxwell999b/Midnight-Radiance-Theme" target="_blank" className="projects--card">
              Midnight Radiance Theme -firefox theme
            </a>
          </p>
        </div>
      </a>
    </div>
  </section>
);

export default Projects;
