import DSLogo from '../../assets/ds-logo.png';
import { Button } from '../ui/button';
import LinkedInLogo from '../../assets/linkedin-logo.png';
import PDFLogo from '../../assets/pdf-logo.png';
import CVFelipe from '../../assets/cv-felipe.pdf';

const handleRedirectToLinkedIn = () => {
  window.open('https://www.linkedin.com/in/fpattillo', '_blank');
}

export const CurriculumVitae = () => {
  return (
    <div className='w-full max-w-[550px]'>
      <p className='ml-10 text-xl font-bold'>Work Experience</p>
      <div className='flex justify-between items-start m-10 p-3 rounded-xl bg-[#F4D35E]'>
        <div className='flex'>
          <img src={DSLogo} height={52} width={52} alt="DataScope logo" />
          <div className='flex flex-col items-start ml-3'>
            <h2 className='text-lg font-bold'>DataScope</h2>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className='flex h-full items-center'>
          <p>Sept 2021 - now</p>
        </div>
      </div>
      <div className='flex justify-between gap-x-3 p-12'>
        <Button text={'Connect with me!'} selected startIcon={LinkedInLogo} fullWidth onClick={handleRedirectToLinkedIn}/>
        <a href={CVFelipe} download target='_blank' rel='noreferrer' className='w-full'>
          <Button text={'Full CV'} selected startIcon={PDFLogo} fullWidth />
        </a>
      </div>
    </div>
  );
}