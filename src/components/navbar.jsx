import { NavbarButton } from "./ui/navbarButton";

export const Navbar = ({ currentTab, tabSetter }) => {
  const tabs = ["CV", "hobbies", "studies"];

  return (
    <div className="flex gap-x-3 py-2.5 px-3 bg-[#0D3B66] lg:rounded-xl w-full lg:mt-14">
      {tabs.map((tab, index) => (
        <NavbarButton
          key={tab}
          text={tab.charAt(0).toUpperCase() + tab.slice(1)}
          onClick={() => tabSetter(tab)}
          selected={currentTab === tab}
          index={index}
          selectedIndex={tabs.indexOf(currentTab)}
        />
      ))}
    </div>
  );
};
