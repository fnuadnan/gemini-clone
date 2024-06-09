import { useState } from "react";
import APIClient from "../services/api-client";

const apiclient = new APIClient("/gemini");

const useGemini = () => {
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]); // store all the input history and display in recent tab
  const [showResult, setShowResult] = useState(false); // will hide the: hello dev , and display the result
  const [loading, setLoading] = useState(false); // showing the loading animation
  const [resultData, setResultData] = useState(""); // display result on webpage

  const handleSent = async (input: string) => {
    try {
      const apiResponse = await apiclient.post(input);
      console.log(apiResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSent,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
    setShowResult,
    setLoading,
    setResultData,
  };
};

export default useGemini;
