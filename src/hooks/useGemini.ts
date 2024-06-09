import { useState } from "react";
import { APIResponse } from "../entities/entities";
import APIClient from "../services/api-client";

const apiclient = new APIClient<APIResponse>("/gemini");

const useGemini = () => {
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]); // store all the input history and display in recent tab
  const [showResult, setShowResult] = useState(false); // will hide the: hello dev , and display the result
  const [loading, setLoading] = useState(false); // showing the loading animation
  const [resultData, setResultData] = useState(""); // display result on webpage

  // function to delay the typing effect
  const delapPara = (index: number, nextWord: string) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (input: string) => {
    try {
      setResultData(""); // reset data
      setLoading(true); // show loading
      setShowResult(true); // show the result and remove the hello dev
      setRecentPrompt(input); // the input

      const apiResponse = await apiclient.post(input); // response

      // make the response bold and line break after each ** and * in the response string from the api
      const responseArray = apiResponse.response.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }
      const newResponse2 = newResponse.split("*").join("</br>");

      // split the response string into an array of words and delay the typing effect
      const newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delapPara(i, nextWord + " ");
      }

      setLoading(false); // take off the loading
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onSent,
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
