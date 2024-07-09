import { IoMdCheckmark, IoMdChatbubbles } from "react-icons/io";
import "./Experience.css";

const Experience = () => (
  <section className="experience">
    <h3 className="experience--title">
      <IoMdChatbubbles className="custom-chat" /> Experience
    </h3>
    <div className="experience--item">
      <div className="experience--details">
        <p className="experience--descr">
          <IoMdCheckmark className="custom-checkbox-mini" /> Part-Time Instructor (DECI Trainers Program)
        </p>
        <div className="experience--info">
          <p className="education--site">Udacity Instructor - Hurghada</p>
          <p className="experience--date">present</p>
        </div>
      </div>
      <div className="experience--details">
        <p className="experience--descr">
          <IoMdCheckmark className="custom-checkbox-mini" /> Data Entry and IT
        </p>
        <div className="experience--info">
          <p className="education--site">Tasaheel microfinance - Hurghada</p>
          <p className="experience--date">2021 – 2022</p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
