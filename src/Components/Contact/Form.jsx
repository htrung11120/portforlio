export default function Form() {
  const handleSubmit = (e) => {};
  return (
    <div className="  flex h-auto w-9/12 flex-col items-center  justify-center md:w-[600px] ">
      <p className=" mt-10 text-4xl text-white md:mt-14 md:text-5xl">
        Send me a message!
      </p>
      <form
        action="https://formsubmit.co/htrung11120@gmail.com"
        method="POST"
        className=" md:text-md ml-14 mt-12 flex  w-10/12 flex-col gap-12 text-xs"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full  justify-between gap-8  md:flex-row">
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            className="h-10 w-full grow rounded-md pl-1 md:pl-4"
            required
          />
          <input
            type="email"
            name="senderEmail"
            placeholder="Your email"
            className="h-10 w-full grow rounded-md pl-1 md:pl-4"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject..."
          className="h-10 w-full grow rounded-md pl-1 md:pl-4"
        />
        <textarea
          name="message"
          id=""
          cols="50"
          rows="8"
          placeholder="Your Message..."
          className=" rounded-md p-4 "
          required
        ></textarea>
        <button
          type="submit"
          className="h-10 w-full self-center rounded-md bg-white text-center md:h-16"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
