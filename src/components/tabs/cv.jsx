import DSLogo from '../../assets/ds-logo.png';
import { Button } from '../ui/button';
import LinkedInLogo from '../../assets/linkedin-logo.png';
import PDFLogo from '../../assets/pdf-logo.png';
import CVFelipe from '../../assets/cv-felipe.pdf';
import { CVAccordion } from '../ui/accordion';
import AramarkLogo from '../../assets/Aramark_logo.png';
import RotterYKraussLogo from '../../assets/rotter_y_krauss_logo.png';

const handleRedirectToLinkedIn = () => {
  window.open('https://www.linkedin.com/in/fpattillo', '_blank');
}

export const CurriculumVitae = () => {
  return (
    <div className='w-full max-w-[550px]'>
      <p className='ml-10 text-xl font-bold'>Work Experience</p>
      <CVAccordion
        company={'DataScope'}
        role={'Software Engineer'}
        period={'Sept 2021 - now'}
        logo={DSLogo}
      />
      <CVAccordion
        company={'Aramark'}
        role={'Medical Transportation Assistant'}
        period={'Dec 2020 - Jan 2021'}
        logo={AramarkLogo}
      />
      {/* <CVAccordion
        company={'Rotter & Krauss'}
        role={'Salesman'}
        period={'Dec 2015'}
        logo={RotterYKraussLogo}
      /> */}
      <div className='flex justify-between gap-x-3 p-12'>
        <Button text={'Connect with me!'} startIcon={LinkedInLogo} fullWidth onClick={handleRedirectToLinkedIn}/>
        <a href={CVFelipe} download target='_blank' rel='noreferrer' className='w-full'>
          <Button text={'Full CV'} startIcon={PDFLogo} fullWidth />
        </a>
      </div>
    </div>
  );
}