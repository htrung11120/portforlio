export default function Form() {
  const handleSubmit = (e) => {
    window.location.href = "http://localhost:5173/";
  };
  return (
    <div className="  flex h-auto w-9/12 flex-col items-center  md:w-[600px] ">
      <p className=" mt-10 text-4xl text-white md:mt-14 md:text-5xl">
        Send me a message!
      </p>
      <form
        action="https://formspree.io/f/mleqrylv"
        method="POST"
        className=" ml-14 mt-12 flex w-10/12  flex-col gap-12 text-xs md:text-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-wrap justify-between gap-8  md:flex-row">
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            className="h-10 grow rounded-md pl-1 md:pl-4"
            required
          />
          <input
            type="email"
            name="senderEmail"
            placeholder="Your email"
            className="h-10  grow rounded-md pl-1 md:pl-4"
            required
          />
        </div>

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
          className="h-10 w-full self-center rounded-md bg-white text-center text-2xl hover:scale-105 md:h-16"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
