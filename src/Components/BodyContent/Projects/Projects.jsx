import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects({ scrollToProjects }) {
  return (
    <div
      className="  mt-6  flex w-screen flex-col md:mt-20 md:w-full md:flex-row md:justify-between md:gap-60"
      ref={scrollToProjects}
    >
      <h3 className=" px-10 text-4xl md:text-7xl">Projects</h3>
      <div className="flex flex-col items-center justify-center  md:gap-24">
        <div className=" flex w-screen flex-col items-center justify-center md:w-full">
          <div className="mt-10 h-48 w-6/12 bg-gray-600 md:mt-44 md:h-96 md:w-11/12"></div>
          <div className="mt-4 flex  w-full flex-col items-center justify-center md:relative  md:mt-10 md:flex-row">
            <h3 className="  text-2xl md:text-4xl">Project name</h3>
            <div className="flex flex-row gap-2 md:absolute md:right-6">
              <FaGithub className="h-5 w-5 md:h-8 md:w-8" />
              <FaArrowUpRightFromSquare className="h-5 w-5 md:h-8 md:w-8" />
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-1 text-xl md:mt-6 md:flex-row md:gap-10 md:text-3xl">
            <li className=" w-5/12 rounded-lg bg-gray-100 text-center md:w-32">
              Js
            </li>
            <li className=" w-5/12 rounded-lg bg-gray-100  text-center md:w-32">
              React
            </li>
            <li className=" w-7/12 rounded-lg bg-gray-100  text-center md:w-32">
              Tailwind
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
