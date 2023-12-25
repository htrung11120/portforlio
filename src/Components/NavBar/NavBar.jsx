export default function NavBar({
  scrollTo,
  scrollToProjects,
  scrollToSkill,
  scrollToContact,
  scrollToAboutMe,
}) {
  const listStyled = "cursor-pointer hover:text-[#ff4d00]";
  return (
    <div>
      <ul className="  flex flex-row justify-end gap-14 pr-60 pt-10 text-2xl">
        <li className={listStyled}>Home</li>
        <li
          className={listStyled}
          onClick={() => {
            scrollTo(scrollToAboutMe);
          }}
        >
          About
        </li>
        <li
          className={listStyled}
          onClick={() => {
            scrollTo(scrollToSkill);
          }}
        >
          Skill
        </li>
        <li
          className={listStyled}
          onClick={() => {
            scrollTo(scrollToProjects);
          }}
        >
          Projects
        </li>
        <li
          className={listStyled}
          onClick={() => {
            scrollTo(scrollToContact);
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
