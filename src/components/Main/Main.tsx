import { useForm } from "react-hook-form";
import { assets } from "../../assets/assets";
import { FormValues } from "../../entities/entities";
import useGemini from "../../hooks/useGemini";
import "./Main.css";

const Main = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { onSent, showResult, recentPrompt, resultData } = useGemini();

  const onSubmit = (data: FormValues) => {
    onSent(data.input);
    console.log(data.input);
    reset();
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
              <p>How an I help you today?</p>
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
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
          </div>
        )}

        <div className="main-bottom">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter a prompt here"
                {...register("input")}
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img
                  onClick={() => handleSubmit(onSubmit)()}
                  src={assets.send_icon}
                  alt=""
                />
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
