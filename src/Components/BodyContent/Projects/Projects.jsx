import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects({ scrollToProjects }) {
  return (
    <div className=" mt-32 flex  flex-row md:gap-96" ref={scrollToProjects}>
      <h3 className="text-4xl md:text-7xl">Projects</h3>
      <div className="flex flex-col items-center justify-center  md:gap-24">
        <div className=" flex flex-col items-center justify-center">
          <div className="mt-20 h-[200px] w-10/12 bg-gray-600 md:mt-44 md:h-[500px] md:w-[800px]"></div>
          <div className="relative mt-4 flex w-full flex-row items-center justify-center md:mt-10">
            <h3 className="  text-2xl md:text-4xl">Project name</h3>
            <div className="absolute right-0 flex flex-row gap-4">
              <FaGithub className="h-6 w-6 md:h-8 md:w-8" />
              <FaArrowUpRightFromSquare className="h-6 w-6 md:h-8 md:w-8" />
            </div>
          </div>
          <ul className="mt-4 flex flex-row items-center justify-center gap-4 text-xl md:mt-6 md:gap-10 md:text-3xl">
            <li className="mx-6 w-24 rounded-lg bg-gray-100 text-center md:w-32">
              Js
            </li>
            <li className="mx-6 w-24 rounded-lg bg-gray-100  text-center md:w-32">
              React
            </li>
            <li className="mx-6 w-24 rounded-lg bg-gray-100  text-center md:w-32">
              Tailwind
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
