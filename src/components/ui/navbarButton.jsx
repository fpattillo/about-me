export const NavbarButton = ({ text, onClick, selected }) => {
  return (
    <button className={`${selected ? 'bg-white text-black': 'text-white'} rounded-lg p-2 flex items-center max-h-[56px]`} onClick={onClick}>
      {text}
    </button>
  );
}