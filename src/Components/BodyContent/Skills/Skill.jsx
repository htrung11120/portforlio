import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNpm, FaFigma, FaGitAlt, FaReact, FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { PiFramerLogo } from "react-icons/pi";
import { IoLogoVercel } from "react-icons/io5";

export default function Skill({ scrollToSkill }) {
  const skillSetStyled = "flex flex-wrap md:gap-32 gap-10 justify-center ";
  const iconStyled =
    "w-[40px] h-[40px] md:w-[80px] md:h-[80px] hover:fill-[#ff4d00]";
  const skillHeadingStyled = "text-2xl md:text-3xl mb-16";

  return (
    <div
      className=" flex flex-col md:items-center md:justify-center"
      ref={scrollToSkill}
    >
      <div className=" align-center my-5 items-center justify-center border-y-2 border-solid border-[#878383] md:my-10 ">
        <div className="mb-36	mt-24 flex flex-row justify-between gap-48 md:gap-10 ">
          <h3 className="text-4xl md:text-7xl	">Skills</h3>
          <p className="w-[800px]	text-xl leading-10 md:pr-32 md:text-2xl	">
            Experienced in building modern web applications and reusable user
            interface components using React.js, Javascript (ES6), HTML5,
            SASS/SCSS, CSS3. Currently learning Node.js, Express.js, and MongoDB
            to connect backend functionality to future applications.
          </p>
        </div>
        <div className="align-center align-center mb-28 flex flex-row justify-center ">
          <div className="flex	 flex-col items-center justify-center ">
            <h3 className={`${skillHeadingStyled}`}>
              Languages and Frameworks
            </h3>
            <div
              className={`${skillSetStyled} border-r-2 border-solid border-[#878383]  pr-24`}
            >
              <AiOutlineHtml5 className={iconStyled} />
              <FaCss3Alt className={iconStyled} />
              <SiTailwindcss className={iconStyled} />
              <RiJavascriptLine className={iconStyled} />
              <FaReact className={iconStyled} />
              <FaSass className={iconStyled} />
            </div>
          </div>
          <div className="flex	 flex-col items-center justify-center">
            <h3 className={`${skillHeadingStyled}`}>Development Tools</h3>
            <div
              className={`${skillSetStyled} border-solid border-[#878383]  pl-24`}
            >
              <SiRedux className={iconStyled} />
              <PiFramerLogo className={iconStyled} />
              <FaGitAlt className={iconStyled} />
              <FaNpm className={iconStyled} />
              <FaFigma className={iconStyled} />
              <IoLogoVercel className={iconStyled} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
