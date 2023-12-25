export default function NavBar() {
  const listStyled = "cursor-pointer hover:text-[#ff4d00]";
  return (
    <div>
      <ul className=" flex flex-row justify-end gap-14 pr-60 pt-10 text-2xl ">
        <li className={listStyled}>About</li>
        <li className={listStyled}>Skill</li>
        <li className={listStyled}>Projects</li>
        <li className={listStyled}>Contact</li>
        <li>
          <button>sẽ làm nút dark mode sau</button>
        </li>
      </ul>
    </div>
  );
}
