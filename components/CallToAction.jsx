import { IoMdCheckmark, IoMdChatbubbles } from "react-icons/io";
import "./CallToAction.css";

const CallToAction = () => (
  <section className="call-to-action">
    <h3 className="call-to-action--title">
      <IoMdChatbubbles className="custom-chat" /> Collaborate
    </h3>
    <p className="call-to-action--descr">
      <IoMdCheckmark className="custom-checkbox-mini" />{" "}
      <span className="bg-heading-titles"> Feel free to reach out to me 👊 </span> for collaborations or opportunities.
    </p>
  </section>
);

export default CallToAction;
