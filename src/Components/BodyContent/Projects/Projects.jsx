import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects({ scrollToProjects }) {
  return (
    <div className="mt32 my-10 flex  flex-row gap-96" ref={scrollToProjects}>
      <h3 className="text-7xl">Projects</h3>
      <div className="flex flex-col items-center justify-center gap-24">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-44 h-[500px] w-[800px] bg-gray-600"></div>
          <div className="relative mt-10 flex w-full flex-row items-center justify-center">
            <h3 className="  text-4xl">Project name</h3>
            <div className="absolute right-0 flex flex-row gap-4">
              <FaGithub className="h-8 w-8" />
              <FaArrowUpRightFromSquare className="h-8 w-8" />
            </div>
          </div>
          <ul className="mt-6 flex flex-row items-center justify-center gap-10 text-3xl">
            <li className="w-32 rounded-lg bg-gray-100 text-center">Js</li>
            <li className="w-32 rounded-lg bg-gray-100 text-center">React</li>
            <li className="w-32 rounded-lg bg-gray-100 text-center">
              Tailwind
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
