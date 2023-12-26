import { RxHamburgerMenu } from "react-icons/rx";

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
      <ul className="pr-18 relative hidden flex-row justify-end gap-20 pt-10 text-2xl md:flex">
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
      <button className=" fixed right-32 top-10  h-12 w-12 flex-col gap-10 space-y-1 md:hidden">
        <RxHamburgerMenu className="h-32 w-32" />
      </button>
    </nav>
  );
}
