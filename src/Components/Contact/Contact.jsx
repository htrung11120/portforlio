export default function Contact({ scrollToContact }) {
  return (
    <div
      ref={scrollToContact}
      className="flex w-screen flex-col px-10 md:w-full "
    >
      <h3 className=" my-10 text-4xl md:mb-12 md:text-7xl">Contact</h3>
      <div className="flex flex-col md:flex-row md:gap-24">
        <div className="ml-14 flex h-[600px] w-10/12 flex-col gap-8 bg-slate-200 px-8 pb-10 md:mt-10 md:w-[600px]  md:gap-16 md:px-16 md:pb-16">
          <p className=" text-3xl text-black md:mt-10 md:pl-16 md:text-5xl">
            Say Hi!
          </p>
          <p className=" pr-32 text-xl text-black">
            Currently open for new opportunities or people to share ideas with!
            For any other information about me or my work, feel free to reach
            out!
          </p>
          <button className="h-10 w-32 bg-black  text-lg md:h-16 md:w-48">
            View Resume
          </button>
          <div className="flex flex-col gap-4 text-2xl">
            <span>Contact me at</span>
            <a href="mailto:htrung11120@gmail.com" className="underline">
              htrung11120@gmail.com
            </a>
          </div>
        </div>
        <div className="  flex h-auto w-9/12 flex-col items-center  justify-center md:w-[600px] ">
          <p className=" text-4xl text-white md:text-5xl">Send me a message!</p>
          <form
            action=""
            className=" ml-14 mt-12 flex w-10/12  flex-col gap-12"
          >
            <div className="flex w-full  justify-between gap-8 md:flex-row">
              <input
                type="text"
                name="senderName"
                placeholder="Your Name"
                className="h-10  grow rounded-md pl-4"
              />
              <input
                type="text"
                name="senderEmail"
                placeholder="Your email"
                className="h-10  grow rounded-md pl-4"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject..."
              className="h-10 w-full grow rounded-md pl-4"
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
