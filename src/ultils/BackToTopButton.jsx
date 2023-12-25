import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowScrollTopBtn(true);
      } else {
        setShowScrollTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 cursor-pointer hover:text-[#ff4d00]">
      {showScrollTopBtn && (
        <FaAngleUp className="h-14 w-16" onClick={scrollTop} />
      )}
    </div>
  );
}
