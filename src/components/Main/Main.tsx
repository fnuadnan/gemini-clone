import { useForm } from "react-hook-form";
import { assets } from "../../assets/assets";
import { FormValues } from "../../entities/entities";
import "./Main.css";

interface MainProps {
  setPrevPrompts: React.Dispatch<React.SetStateAction<string[]>>;

  onSent: (input: string) => void;
  showResult: boolean;
  recentPrompt: string;
  resultData: string;
  loading: boolean;
}

const Main = ({
  setPrevPrompts,
  onSent,
  showResult,
  recentPrompt,
  resultData,
  loading,
}: MainProps) => {

  // Get the input value from the form
  const { register, handleSubmit, reset, watch } = useForm<FormValues>();

  // Get the input value from the form
  const input = watch("input");

  // Function to handle the form submission
  const onSubmit = (data: FormValues) => {
    // If the input is empty, return
    if (!data.input || data.input.trim() === "") {
      return;
    }
    onSent(data.input);
    setPrevPrompts((prev) => [data.input, ...prev]); // Add the new prompt to the prevPrompts list
    reset({ input: "" });
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter a prompt here"
                autoComplete="off"
                {...register("input")}
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input &&
                  input.trim() !== "" && ( // Only show the send icon if the input is not empty
                    <img
                      onClick={() => handleSubmit(onSubmit)()}
                      src={assets.send_icon}
                      alt=""
                    />
                  )}
              </div>
            </div>
          </form>
          <p className="bottom-info">
            Gemini may display innacurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
