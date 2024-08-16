import { ListSection } from "../listSection";
import { IoArrowDown } from "react-icons/io5";
import { useState } from "react";

export const Studies = () => {
  const [fullyScrolledDown, setFullyScrolledDown] = useState(false);

  const handleCheckScroll = (event) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) setFullyScrolledDown(true);
    else setFullyScrolledDown(false);
  };

  const studySections = [
    {
      title: "Industrial Engineering w/ Diploma in Software Engineering",
      subtitle: "Pontificia Universidad Católica de Chile 🇨🇱",
      description: "2017 - 2023",
      buttons: [],
    },
    {
      title: "Exchange Program",
      subtitle: "University of Groningen 🇳🇱",
      description: "Aug 2022 - Jan 2023",
      buttons: [],
    },
    {
      title: "School",
      subtitle: "Colegio The Newland School, Santiago, Chile 🇨🇱",
      description: "2009 - 2016",
      buttons: [],
    },
    {
      title: "Secondary School",
      subtitle: "South Island School, Hong Kong 🇭🇰",
      description: "2009 - 2010",
      buttons: [],
    },
    {
      title: "Primary School",
      subtitle: "Quarry Bay School, Hong Kong 🇭🇰",
      description: "2003 - 2008",
      buttons: [],
    },
  ];

  return (
    <div className="bg-[#F4D35E] relative flex flex-col justify-center items-center rounded-xl w-[650px] max-lg:w-full">
      <div
        id="study-list"
        className="p-5 flex flex-col gap-y-7 max-h-[400px] overflow-y-scroll w-full"
        onScroll={handleCheckScroll}
      >
        {studySections.map((section, index) => (
          <ListSection
            key={`study-section-${index}`}
            title={section.title}
            subtitle={section.subtitle}
            description={section.description}
            buttons={section.buttons}
          />
        ))}
      </div>
      {!fullyScrolledDown && (
        <div
          className="bg-white p-2 rounded-3xl absolute bottom-2"
          onClick={() =>
            document
              .getElementById("study-list")
              .scrollTo({ top: 1000, behavior: "smooth" })
          }
        >
          <IoArrowDown size={24} />
        </div>
      )}
    </div>
  );
};
