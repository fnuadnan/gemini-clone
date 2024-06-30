import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import useGemini from "./hooks/useGemini";

const App = () => {
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]); // store all the input history and display in recent tab
  const { onSent, recentPrompt, showResult, loading, resultData } = useGemini();
  return (
    <>
      <Sidebar prevPrompts={prevPrompts} onSent={onSent} />
      <Main
        setPrevPrompts={setPrevPrompts}
        onSent={onSent}
        recentPrompt={recentPrompt}
        showResult={showResult}
        loading={loading}
        resultData={resultData}
      />
    </>
  );
};

export default App;
