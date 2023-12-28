import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactInfor() {
  return (
    <div className="ml-14 flex h-96 w-10/12 flex-col gap-8 bg-slate-200 px-8 pb-10 md:mt-10 md:h-[600px] md:w-[600px]  md:gap-16 md:px-16 md:pb-16">
      <p className=" text-3xl text-black md:mt-10 md:pl-16 md:text-5xl">
        Say Hi!
      </p>
      <p className=" text-sm text-black md:pr-32 md:text-xl">
        Currently open for new opportunities or people to share ideas with! For
        any other information about me or my work, feel free to reach out!
      </p>
      <button className="h-10 w-24 rounded-lg bg-black text-xs hover:scale-105 md:h-16 md:w-48 md:text-lg">
        View Resume
      </button>
      <div className="flex flex-col gap-1 text-lg md:gap-4 md:text-2xl">
        <span className="text-sm">Contact me at</span>
        <div className="flex flex-row justify-between text-sm">
          <a href="mailto:htrung11120@gmail.com" className="text-sm underline">
            htrung11120@gmail.com
          </a>
          <div>
            <span>Or find me here</span>
            <div className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/tran-trung-a63037265/">
                <FaLinkedin className="h-8 w-8 hover:scale-110 hover:text-[#ff4d00]" />
              </a>
              <a href="https://github.com/htrung11120">
                <FaGithub className="h-8 w-8 hover:scale-110 hover:text-[#ff4d00]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
