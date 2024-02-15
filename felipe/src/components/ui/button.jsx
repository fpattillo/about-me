export const Button = ({ text, onClick, selected, startIcon, endIcon, fullWidth }) => {
  return (
    <button className={`${selected ? 'bg-white text-black': 'text-white'} rounded-lg p-2 flex items-center ${fullWidth ? 'w-full' : ''}`} onClick={onClick}>
      {startIcon && <img src={startIcon} height={40} width={40} className='mr-3 justify-self-start'/>}
      {text}
      {endIcon && <img src={endIcon} height={40} width={40} className='ml-3'/>}
    </button>
  );
}