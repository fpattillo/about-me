export const NavbarButton = ({
  text,
  onClick,
  selected,
  index,
  selectedIndex,
}) => {
  const slideLeft = index > selectedIndex;
  const slideRight = index < selectedIndex;
  return (
    <button
      className={`relative group rounded-lg p-2 flex items-center justify-center max-h-[56px] w-[75px] transition-colors duration-300`}
      onClick={onClick}
    >
      <span
        className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
          selected
            ? "translate-x-0 bg-white rounded-lg"
            : slideLeft
            ? "-translate-x-full"
            : slideRight
            ? "translate-x-full"
            : "translate-x-0 bg-transparent"
        }`}
      />
      <span
        className={`relative z-10 ${selected ? "text-black" : "text-white"}`}
      >
        {text}
      </span>
    </button>
  );
};
