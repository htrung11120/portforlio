export default function Contact({ scrollToContact }) {
  return (
    <div ref={scrollToContact} className="flex flex-col  ">
      <h3 className=" my-10 text-4xl md:mb-24 md:text-7xl">Contact</h3>
      <div className="flex flex-col md:flex-row md:gap-48">
        <div className="flex h-auto w-9/12 flex-col gap-8 self-center bg-slate-200 px-16 pb-16 md:w-[800px] md:gap-16">
          <p className=" pt-10 text-3xl text-black md:pl-16 md:pt-16 md:text-5xl">
            Say Hi
          </p>
          <p className=" text-xl text-black">
            Currently open for new opportunities or people to share ideas with!
            For any other information about me or my work, feel free to reach
            out!
          </p>
          <button className="text-md h-10 w-32 self-center bg-black md:h-16 md:w-48">
            View Resume
          </button>
          <p className="text-xl">
            Contact me at link
            <a href="mailto:htrung11120@gmail.com">htrung11120@gmail.com</a>
          </p>
        </div>
        <div className="  flex h-auto w-9/12 flex-col md:w-[600px] ">
          <p className="mt-10 text-4xl text-white md:text-6xl">
            Send me a message!
          </p>
          <form
            action=""
            className=" mt-12 flex w-9/12 flex-col  gap-12 self-center"
          >
            <div className="flex flex-row justify-between gap-14">
              <input
                type="text"
                name="senderName"
                placeholder="Your Name"
                className="h-10 w-36 rounded-md pl-4"
              />
              <input
                type="text"
                name="senderEmail"
                placeholder="Your email"
                className="h-10 w-36 rounded-md pl-4"
              />
            </div>
            <input
              type="text"
              name="senderEmail"
              placeholder="Subject...."
              className="h-10 w-full rounded-md pl-4"
            />
            <textarea
              name=""
              id=""
              cols="70"
              rows="10"
              placeholder="Your Message..."
              className="rounded-md p-4"
            ></textarea>
            <button className="h-16 rounded-md bg-white text-center">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
