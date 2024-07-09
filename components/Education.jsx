import { IoMdCheckmark, IoMdChatbubbles } from "react-icons/io";
import "./Education.css";

const Education = () => (
  <section className="education">
    <h3 className="education--title">
      <IoMdChatbubbles className="custom-chat" /> Education
    </h3>
    <div className="education--item">
      <div className="education--details">
        <p className="education--descr">
          <IoMdCheckmark className="custom-checkbox-mini" /> Software Engineering Development Fundamentals
        </p>
        <div className="education--info">
          <p className="education--site">Information Technology Institute , ITI - Qena</p>
          <p className="education--date">2021 – 2022</p>
        </div>
      </div>
      <div className="education--details">
        <p className="education--descr">
          <IoMdCheckmark className="custom-checkbox-mini" /> Bachelor of Management Information Systems
        </p>
        <div className="education--info">
          <p className="education--site">Modern Academy - Cairo</p>
          <p className="education--date">2015 – 2019</p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
