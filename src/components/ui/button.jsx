import { useEffect, useState } from "react";

export const Button = ({
  backgroundColor,
  onClick,
  startIcon,
  endIcon,
  text,
  fullWidth,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <button
      className={`${
        backgroundColor ? `bg-[${backgroundColor}]` : "bg-white"
      } text-black rounded-lg p-2 flex items-center ${
        fullWidth ? "w-full" : isSmallScreen ? "w-auto" : ""
      } max-h-[56px] hover:bg-slate-100 transition-all duration-300`}
      onClick={onClick}
    >
      {startIcon && (
        <img
          src={startIcon}
          height={40}
          width={40}
          className="sm:mr-3 sm:justify-self-start"
        />
      )}
      {!isSmallScreen && <span>{text}</span>}
      {endIcon && <img src={endIcon} height={40} width={40} className="ml-3" />}
    </button>
  );
};
