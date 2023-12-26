import { useRef } from "react";
import Projects from "./Components/BodyContent/Projects/Projects";
import Skill from "./Components/BodyContent/Skills/Skill";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import BackToTopButton from "./ultils/BackToTopButton";
import Home from "./Components/BodyContent/Home/Home";
import Aboutme from "./Components/BodyContent/AboutMe/Aboutme";

function App() {
  const scrollToAboutMe = useRef(null);
  const scrollToSkill = useRef(null);
  const scrollToProjects = useRef(null);
  const scrollToContact = useRef(null);

  const scrollTo = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className=" mx-24 mb-32 flex flex-col scroll-smooth">
        <NavBar
          scrollTo={(section) => scrollTo(section)}
          scrollToSkill={scrollToSkill}
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
          scrollToAboutMe={scrollToAboutMe}
        />
        <Home />
        <Aboutme scrollToAboutMe={scrollToAboutMe} />
        <Skill scrollToSkill={scrollToSkill} />
        <Projects scrollToProjects={scrollToProjects} />
        <Contact scrollToContact={scrollToContact} />
      </div>
      <BackToTopButton />
    </div>
  );
}

export default App;
