import { useEffect, useRef } from "react";
export const useObserver = (
  state: number,
  setFn: React.Dispatch<React.SetStateAction<number>>
) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setFn(state);
    }, options);

    if (el.current) observer.observe(el.current);

    return () => observer.disconnect();
  }, [state, setFn]);

  return el;
};
