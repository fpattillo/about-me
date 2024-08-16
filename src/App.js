import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Tab } from "./components/tab";

function App() {
  const [tab, setTab] = useState("CV");
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-start items-center h-full w-full md:w-10/12">
        <Navbar currentTab={tab} tabSetter={setTab} />
        <Tab currentTab={tab} />
      </div>
    </div>
  );
}

export default App;
