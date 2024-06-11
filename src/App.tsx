import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]); // store all the input history and display in recent tab

  return (
    <>
      <Sidebar prevPrompts={prevPrompts} />
      <Main setPrevPrompts={setPrevPrompts} />
    </>
  );
};

export default App;
