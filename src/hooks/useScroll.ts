import { useState, useEffect } from "react";

const useScroll = () => {
  const [showNav, setShowNav] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = scrollPos > currentScrollPos;

      setScrollPos(currentScrollPos);
      setShowNav(visible);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollPos]);

  return showNav;
};

export default useScroll;
