import { Button } from "./ui/button";

export const Navbar = ({ currentTab, tabSetter }) => {
  return (
    <div className="flex gap-x-3 py-2.5 px-3 bg-[#0D3B66] lg:rounded-xl w-full lg:mt-14">
      <Button text={'Home'} onClick={() => tabSetter('home')} selected={currentTab === 'home'}/>
      <Button text={'CV'} onClick={() => tabSetter('cv')} selected={currentTab === 'cv'}/>
      <Button text={'Hobbies'} onClick={() => {}/*tabSetter('hobbies')*/} selected={currentTab === 'hobbies'}/>
      <Button text={'Studies'} onClick={() => {}/*tabSetter('studies')*/} selected={currentTab === 'studies'}/>
    </div>
  );
}