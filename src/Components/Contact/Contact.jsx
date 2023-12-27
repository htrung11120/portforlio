import Form from "./Form";
import ContactInfor from "./ContactInfor";
export default function Contact({ scrollToContact }) {
  return (
    <div
      ref={scrollToContact}
      className="flex w-screen flex-col px-10 md:w-full "
    >
      <h3 className=" my-10 text-4xl md:mb-12 md:text-7xl">Contact</h3>
      <div className="flex flex-col md:flex-row md:gap-24">
        <ContactInfor />
        <Form />
      </div>
    </div>
  );
}
