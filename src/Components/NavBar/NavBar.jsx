export default function NavBar({
  scrollTo,
  scrollToProjects,
  scrollToSkill,
  scrollToContact,
  scrollToAboutMe,
}) {
  const listStyled = "cursor-pointer hover:text-[#ff4d00]";

  const handleNavigation = (scrollFunction) => {
    if (scrollFunction) {
      scrollTo(scrollFunction);
    }
  };

  return (
    <nav>
      <ul className="pr-18 relative  flex flex-row justify-end gap-8 pt-10 text-sm md:gap-20 md:text-2xl ">
        <li className={listStyled}>Home</li>
        <li
          className={listStyled}
          onClick={() => handleNavigation(scrollToAboutMe)}
        >
          About
        </li>
        <li
          className={listStyled}
          onClick={() => handleNavigation(scrollToSkill)}
        >
          Skill
        </li>
        <li
          className={listStyled}
          onClick={() => handleNavigation(scrollToProjects)}
        >
          Projects
        </li>
        <li
          className={listStyled}
          onClick={() => handleNavigation(scrollToContact)}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
