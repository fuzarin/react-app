import React, { useState } from "react";
import { ChatTeardropDots } from "phosphor-react";
import WidgetForm from "../WidgetForm";

const Widget = () => {
 const [isWidgetOpen, setIsWidgetOpepn] = useState(false);

 const toggleWidgetVisibility = () => {
  setIsWidgetOpepn(!isWidgetOpen);
 }

  return (
    <div className="absolute bottom-5 right-5 z-30 md:bottom-8 md:right-8 flex items-end flex-col">
     {isWidgetOpen && <WidgetForm toggleWidgetVisibility={toggleWidgetVisibility}/>}
      <button onClick={toggleWidgetVisibility} className="bg-[#b5211a] p-3 rounded-full flex items-center group text-white">
        <ChatTeardropDots  size="35"/>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs">Feedback</span>
      </button>
    </div>
  );
};

export default Widget;
