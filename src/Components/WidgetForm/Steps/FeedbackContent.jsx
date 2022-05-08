import { ArrowLeft } from "phosphor-react";
import React, { useState } from "react";
import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreeshotButton";

const FeedBackContentStep = ({
  toggleWidgetVisibility,
  feedBackType,
  feedBackTypes,
  handleFeedBackRestart,
  onFeedBackSent
}) => {
  const [screenShot, setScreenshot] = useState(null);
  const [comment, setComment] = useState('');

  const feedBackTypeInfo = feedBackTypes[feedBackType];

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    
    onFeedBackSent();
  }

  return (
    <>
      <header>
        <button
          onClick={handleFeedBackRestart}
          type="button"
          className="top-5 left-5 absolute"
        >
          <ArrowLeft
            weight="bold"
            className="w-4 h-4 text-zinc-400 hover:text-zinc-100'"
          />
        </button>
        <CloseButton toggleWidgetVisibility={toggleWidgetVisibility} />
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedBackTypeInfo.icon}
            alt={feedBackTypeInfo.alt}
            className="w-6 h-6 invert"
          />
          {feedBackTypeInfo.title}
        </span>
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-{304px} w-full min-height-{112px} text-sm placeholder-zinc-400 border-zinc-600 bg-transparent rounded-md focus:border-primary-500 focus:ring-primary-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e)=>setComment(e.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton 
            screenShot={screenShot}
            onScreeShotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0}
            className="p-2 bg-primary-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-primary-500 transition-colors disabled:opacity-50 disabled:hover:bg-primary-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};

export default FeedBackContentStep;
