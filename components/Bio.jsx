import { IoMdCheckmark, IoMdChatbubbles } from "react-icons/io";

export default function Bio() {
  return (
    <section className="bio">
      <span className="bio--about">
        <h2 className="bio--about__title">
          <IoMdChatbubbles className="custom-chat" /> About
        </h2>
        <p className="bio--about__descr">
          <IoMdCheckmark className="custom-checkbox-mini" /> I am a frontend developer passionate about creating
          intuitive user experiences. I constantly seek out new technologies and trends as a hobby to stay at the
          forefront of the industry.
        </p>
      </span>

      <span className="bio--intrests">
        <h2 className="bio--intrests__title">
          <IoMdChatbubbles className="custom-chat" /> Intrests
        </h2>
        <p className="bio--intrests__descr">
          <IoMdCheckmark className="custom-checkbox-mini" /> Muslim. Games expert. The world of music. reader. Internet
          fanatic. Lover of calm. JYM BRO. Coffee fanatic.
        </p>
      </span>
    </section>
  );
}
