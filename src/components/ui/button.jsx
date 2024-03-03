export const Button = ({ text, onClick, backgroundColor, startIcon, endIcon, fullWidth }) => {
  return (
    <button className={`bg-${backgroundColor ? `[${backgroundColor}]` : 'white'} text-black rounded-lg p-2 flex items-center ${fullWidth ? 'w-full' : ''} max-h-[56px]`} onClick={onClick}>
      {startIcon && <img src={startIcon} height={40} width={40} className='mr-3 justify-self-start'/>}
      {text}
      {endIcon && <img src={endIcon} height={40} width={40} className='ml-3'/>}
    </button>
  );
}