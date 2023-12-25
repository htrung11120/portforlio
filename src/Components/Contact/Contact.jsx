export default function Contact() {
  return (
    <div>
      <h3 className="mb-24 text-7xl">Contact</h3>
      <div className="flex flex-row gap-48">
        <div className="flex h-auto  w-[800px] flex-col gap-16 bg-slate-200 px-16 pb-16">
          <p className=" pl-16 pt-16 text-5xl text-black">Say Hi</p>
          <p className=" text-2xl text-black">
            Currently open for new opportunities or people to share ideas with!
            For any other information about me or my work, feel free to reach
            out!
          </p>
          <button className="h-16 w-48 bg-black">View Resume</button>
          <p>
            Contact me at link
            <a href="mailto:htrung11120@gmail.com">htrung11120@gmail.com</a>
          </p>
        </div>
        <div className="flex h-auto w-[600px] flex-col">
          <p className="text-5xl text-white">Send me a message!</p>
          <form action="" className="mt-12 flex w-full flex-col gap-12">
            <div className="flex flex-row gap-14">
              <input
                type="text"
                name="senderName"
                placeholder="Your Name"
                className="h-10 grow rounded-md pl-4"
              />
              <input
                type="text"
                name="senderEmail"
                placeholder="Your email"
                className="h-10 grow rounded-md pl-4"
              />
            </div>
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
