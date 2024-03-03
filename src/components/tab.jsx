import { CurriculumVitae } from './tabs/cv';
import { Hobbies } from './tabs/hobbies';
import { Home } from './tabs/home';
import { Studies } from './tabs/studies';
import { createUseStyles } from 'react-jss';
import { useEffect, useState } from 'react';
import Felipe from '../assets/yop.jpeg';
import flashingLights from '../assets/flashing_lights.mp3';

const useStyles = createUseStyles((theme) => ({
  '@keyframes App-logo-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  imageContainer: {
    gridColumn: '1 / 2',
    height: '40vmin',
    borderRadius: '50%',
  },
  image: {
    height: '40vmin',
    borderRadius: '50%',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: ({ imageHovered }) => `${imageHovered ? '$App-logo-spin' : 'none'} infinite 20s linear`,
    },
  },
  container: {
    display: 'grid',
    marginTop: '100px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    gridAutoRows: 'minmax(100px, auto)',
  },
  content: {
    gridColumn: '2 / 4',
    width: '50vw',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export const Tab = ({ currentTab }) => {
  const [imageHovered, setImageHovered] = useState(false);
  const classes = useStyles({ imageHovered });

  useEffect(() => {
    const audioElement = document.getElementById('audio-element');

    if (audioElement) {
      if (imageHovered) {
        audioElement.play();
      } else {
        audioElement.pause();
        audioElement.currentTime = 0; // Reset audio to the beginning
      }
    }
  }, [imageHovered]);

  return (
    <>
      <div className={classes.container}>
        {currentTab !== 'home' && <div 
          className={classes.imageContainer}
          onMouseEnter={() => setImageHovered(true)}
          onMouseLeave={() => setImageHovered(false)}
        >
          <img 
            src={Felipe}
            className={classes.image}
            alt="Felipe's face"
          />
        </div>}
        <div className={classes.content}>
          {currentTab === 'home' && <Home />}
          {currentTab === 'cv' && <CurriculumVitae />}
          {currentTab === 'hobbies' && <Hobbies />}
          {currentTab === 'studies' && <Studies />}
        </div>
      </div>
      <audio loop src={flashingLights} id="audio-element" />
    </>
  );
}