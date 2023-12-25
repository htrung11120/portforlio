import AboutMe from "./Components/BodyContent/AboutMe";
import Projects from "./Components/BodyContent/Projects/Projects";
import Skill from "./Components/BodyContent/Skills/Skill";

function App() {
  return (
    <div className=" flex flex-col scroll-smooth">
      <AboutMe />
      <Skill />
      <Projects />
    </div>
  );
}
{
  /* <p>
Hello, I'm Trung, an aspiring and dedicated software engineering
student with a strong passion for frontend development. Proficient
in React, I leverage my creativity and problem-solving abilities to
craft and implement visually appealing websites. I am eager to
contribute my skills and enthusiasm to a dynamic team as I embark on
my journey towards a rewarding career in frontend development.
</p> */
}
export default App;
