//custom React hook

import { useEffect, useState } from "react";

export function useMouseMove() {
  const [mouseMoved, setMouseMoved] = useState(true);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  function onMouseMove() {
    setMouseMoved(true);
    console.log("Mouse moved");

    let timer = setTimeout(() => {
      setMouseMoved(false);
      console.log("Mouse stoped");
    }, "5000");

    return () => {
      clearTimeout(timer);
    };
  }

  return mouseMoved;
}
