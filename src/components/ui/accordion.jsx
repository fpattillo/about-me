import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  accordion: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    margin: '20px',
    padding: '12px',
    borderRadius: '12px',
    boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: ({ hovered }) => hovered ? '#E8C958' : '#F4D35E',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginLeft: '10px',
  },
  endContainer: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
  },
  role: {
    fontStyle: 'italic',
  }
}));

export const CVAccordion = ({company, role, period, logo}) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles({ hovered });
  return (
    <div
      className={classes.accordion}
      onMouseEnter={() => {
        setHovered(true);
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setExpanded(false);
      }}
    >
      {/* accordion title */}
      <div className='flex justify-between items-start w-full'>
        <div className='flex'>
          <img src={logo} width={52} alt="DataScope logo" />
          <div className={classes.content}>
            <h2 className='text-lg font-bold'>{company}</h2>
            <p className={classes.role}>{role}</p>
          </div>
        </div>
        <div className={classes.endContainer}>
          <p>{period}</p>
        </div>
      </div>
      {/* accordion hidden content */}
      {expanded && <div className='p-6'>
        <p>Hidden content Hidden content Hidden content Hidden content Hidden content Hidden content Hidden content Hidden content </p>
      </div>}
    </div>
  )
}