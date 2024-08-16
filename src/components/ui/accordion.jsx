import { useState, useRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  accordion: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    margin: "20px",
    padding: "12px",
    borderRadius: "12px",
    boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#F4D35E",
    "&:hover": {
      cursor: "pointer",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginLeft: "10px",
  },
  endContainer: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
  },
  role: {
    fontStyle: "italic",
  },
  hiddenContentWrapper: {
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.2s ease", // Faster closing transition
  },
  expandedContentWrapper: {
    maxHeight: "1000px", // Set to a value that accommodates the maximum content height
    transition: "max-height 0.5s ease", // Slower opening transition
  },
}));

export const CVAccordion = ({ company, role, period, logo, description }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles({ hovered });
  const contentRef = useRef(null);

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
      <div className="flex justify-between items-start w-full">
        <div className="flex">
          <img
            className="object-contain"
            src={logo}
            width={52}
            alt={`${company} logo`}
          />
          <div className={classes.content}>
            <h2 className="text-lg font-bold">{company}</h2>
            <p className={classes.role}>{role}</p>
          </div>
        </div>
        <div className={classes.endContainer}>
          <p>{period}</p>
        </div>
      </div>
      {/* accordion hidden content */}
      <div
        ref={contentRef}
        className={`${classes.hiddenContentWrapper} ${
          expanded ? classes.expandedContentWrapper : ""
        }`}
      >
        <div className="p-6">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
