import { IoMdCheckmark, IoMdChatbubbles } from "react-icons/io";
import "./Education.css";

const Education = () => (
  <section className="education">
    <h3 className="education--title">
      <IoMdChatbubbles className="custom-chat" /> Education
    </h3>
    <p className="education--descr">
      <IoMdCheckmark className="custom-checkbox-mini" /> Your Degree from Your University
    </p>
  </section>
);

export default Education;
