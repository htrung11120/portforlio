export default function Contact({ scrollToContact }) {
  return (
    <div
      ref={scrollToContact}
      className="flex w-screen flex-col px-10 md:w-full "
    >
      <h3 className=" my-10 text-4xl md:mb-12 md:text-7xl">Contact</h3>
      <div className="flex flex-col md:flex-row md:gap-24">
        <div className="ml-14 flex h-96 w-10/12 flex-col gap-8 bg-slate-200 px-8 pb-10 md:mt-10 md:h-[600px] md:w-[600px]  md:gap-16 md:px-16 md:pb-16">
          <p className=" text-3xl text-black md:mt-10 md:pl-16 md:text-5xl">
            Say Hi!
          </p>
          <p className=" text-sm text-black md:pr-32 md:text-xl">
            Currently open for new opportunities or people to share ideas with!
            For any other information about me or my work, feel free to reach
            out!
          </p>
          <button className="h-10 w-24 bg-black text-xs md:h-16 md:w-48 md:text-lg">
            View Resume
          </button>
          <div className="flex flex-col gap-1 text-lg md:gap-4 md:text-2xl">
            <span className="text-sm">Contact me at</span>
            <a
              href="mailto:htrung11120@gmail.com"
              className="text-sm underline"
            >
              htrung11120@gmail.com
            </a>
          </div>
        </div>
        <div className="  flex h-auto w-9/12 flex-col items-center  justify-center md:w-[600px] ">
          <p className=" mt-10 text-4xl text-white md:mt-14 md:text-5xl">
            Send me a message!
          </p>
          <form
            action=""
            className=" md:text-md ml-14 mt-12 flex  w-10/12 flex-col gap-12 text-xs"
          >
            <div className="flex w-full  justify-between gap-8  md:flex-row">
              <input
                type="text"
                name="senderName"
                placeholder="Your Name"
                className="h-10 w-full grow rounded-md pl-1 md:pl-4"
              />
              <input
                type="text"
                name="senderEmail"
                placeholder="Your email"
                className="h-10 w-full grow rounded-md pl-1 md:pl-4"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject..."
              className="h-10 w-full grow rounded-md pl-1 md:pl-4"
            />
            <textarea
              name=""
              id=""
              cols="50"
              rows="8"
              placeholder="Your Message..."
              className=" rounded-md p-4 "
            ></textarea>
            <button className="h-10 w-full self-center rounded-md bg-white text-center md:h-16">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
