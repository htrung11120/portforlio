import NavBar from "../NavBar/NavBar";
export default function AboutMe() {
  return (
    <div className="h-screen w-screen ">
      <NavBar />
      <div className="ml-60 mt-60 flex flex-col gap-10 uppercase">
        <p className="text-8xl">Trung Tran</p>
        <p className="text-4xl">Software Engineer</p>
      </div>
    </div>
  );
}
