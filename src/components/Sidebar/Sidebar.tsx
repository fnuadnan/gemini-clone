import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";

interface SidebarProps {
  prevPrompts: string[];
  onSent: (input: string) => void;
}

const Sidebar = ({ prevPrompts, onSent }: SidebarProps) => {
  const [extended, setExtended] = useState(false);

  // function to load the prompt when clicked
  const loadPrompt = async (prompt: string) => {
    onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat" onClick={() => window.location.reload()}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((prompt, index) => (
              <div
                onClick={() => loadPrompt(prompt)}
                key={index}
                className="recent-entry"
              >
                <img src={assets.message_icon} alt="" />
                <p>{prompt.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* this is bottom section (icons)*/}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
