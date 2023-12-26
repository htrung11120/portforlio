export default function Aboutme({ scrollToAboutMe }) {
  return (
    <div
      ref={scrollToAboutMe}
      className="my-20 flex  flex-row items-center justify-center gap-48 py-32"
    >
      <p className=" w-96 self-start text-4xl md:text-7xl">About Me</p>
      <p className="w-auto text-lg md:w-[1000px] md:text-2xl">
        I'm Trung, a college student deeply immersed in the world of software
        engineering, specifically aspiring to specialize as a frontend
        developer. The ever-changing landscape of technology has always
        captivated me, driving my passion for crafting visually appealing
        designs and engaging user interfaces. My enthusiasm lies in the creative
        journey of ensuring an optimal user experience. To achieve this, I'm
        constantly exploring new concepts, technologies, and tools. Beyond
        coding, you'll find me as an avid gamer, drawing for solace, and
        indulging in various other interest
      </p>
    </div>
  );
}
