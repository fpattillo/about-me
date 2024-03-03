import { NavbarButton } from "./ui/navbarButton";

export const Navbar = ({ currentTab, tabSetter }) => {
  return (
    <div className="flex gap-x-3 py-2.5 px-3 bg-[#0D3B66] lg:rounded-xl w-full lg:mt-14">
      <NavbarButton text={'Home'} onClick={() => tabSetter('home')} selected={currentTab === 'home'}/>
      <NavbarButton text={'CV'} onClick={() => tabSetter('cv')} selected={currentTab === 'cv'}/>
      <NavbarButton text={'Hobbies'} onClick={() => tabSetter('hobbies')} selected={currentTab === 'hobbies'}/>
      <NavbarButton text={'Studies'} onClick={() => tabSetter('studies')} selected={currentTab === 'studies'}/>
    </div>
  );
}