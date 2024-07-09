import { IoMdChatbubbles } from "react-icons/io";
import "./Projects.css";

const Projects = () => (
  <section className="projects">
    <h3 className="projects--title">
      <IoMdChatbubbles className="custom-chat" /> Projects
    </h3>
    <div className="projects--grid">
      <a href="https://anime-cards-anime-gogo-tv.vercel.app/" target="_blank" className="projects--card">
        <img src="/assets/1.png" alt="Project 1" className="projects--image" />
        <img src="/assets/1-2.png" alt="Project 1 Hover" className="projects--image-hover" />
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
        <img src="/assets/2.png" alt="Project 2" className="projects--image" />
        <img src="/assets/2-2.png" alt="Project 2 Hover" className="projects--image-hover" />
        <div className="projects--overlay">
          <p className="projects--text">
            <a href="https://github.com/Maxwell999b/pixel-store" target="_blank" className="projects--card">
              Pixel Store
            </a>
          </p>
        </div>
      </a>

      <a href="https://maxwell999b.github.io/Front-End-Portfolio/" target="_blank" className="projects--card">
        <img src="/assets/4.png" alt="Project 4" className="projects--image" />
        <img src="/assets/4-2.png" alt="Project 4 Hover" className="projects--image-hover" />
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
        <img src="/assets/3.png" alt="Project 3" className="projects--image" />
        <img src="/assets/3-2.png" alt="Project 3 Hover" className="projects--image-hover" />
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
