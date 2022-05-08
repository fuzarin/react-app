import React from "react";
import CloseButton from "../../CloseButton";

const FeedBackTypeStep = ({ setFeedBackType, feedBackTypes, toggleWidgetVisibility }) => {
  return (
    <>
      <header>
        <CloseButton toggleWidgetVisibility={toggleWidgetVisibility} />
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedBackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 px-5 w-24 flex-1 flex flex-col items-center gap-2 border-2  hover:bg-primary-500"
              onClick={() => setFeedBackType(key)}
            >
              <img className="invert" src={value.icon} alt={value.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FeedBackTypeStep;
