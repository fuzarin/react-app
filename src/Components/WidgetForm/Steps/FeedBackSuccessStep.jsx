import { Check } from "phosphor-react";
import React from "react";
import CloseButton from "../../CloseButton";

const FeedBackSuccessStep = ({ toggleWidgetVisibility, onFeedBackRestartRequested }) => {
  return (
    <>
      <header>
        <CloseButton toggleWidgetVisibility={toggleWidgetVisibility} />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
       <Check className="bg-primary-500 w-10 h-10"/>
       <span className="text-xl mt-2">Agradecemos o feedback!</span>
       <button onClick={onFeedBackRestartRequested} className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-primary-500 focus:ring-primary-500 focus:ring-1 focus:outline-none">Quero enviar outro.</button>
      </div>
    </>
  );
};

export default FeedBackSuccessStep;
