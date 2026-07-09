
import {useEffect, useState} from "react";

/**
 * True while the window is scrolled within `threshold` px of the top.
 */
export const useScrollAtTop = (threshold = 10) => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return atTop;
};