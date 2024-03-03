import { Button } from './ui/button'

export const HobbySection = ({title, description, buttons}) => {
  return (
    <div className='flex justify-between align-center gap-x-2'>
      <div className='max-w-[300px]'>
        <p className='text-xl font-bold'>{title}</p>
        <p>{description}</p>
      </div>
      <div className='w-full h-full max-w-[180px] ml-4 flex flex-col gap-y-3'>
        {buttons.map(button => <Button text={button.text} startIcon={button.startIcon} fullWidth onClick={button.onClick}/>)}
      </div>
    </div>
  )
}