export default function Aboutme({ scrollToAboutMe }) {
  return (
    <div
      ref={scrollToAboutMe}
      className="my-10 flex  w-screen flex-col items-center justify-center px-10 pt-12 md:flex-row md:gap-48 "
    >
      <p className="w-8/12 self-start pb-4 text-4xl md:ml-28 md:text-7xl ">
        About Me
      </p>
      <p className="w-auto text-lg md:mr-20 md:w-8/12 md:text-2xl">
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
