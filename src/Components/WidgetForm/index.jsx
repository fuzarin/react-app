import React, { useState } from "react";

import FeedBackTypeStep from "./Steps/FeedBackTypeStep";
import FeedBackContentStep from "./Steps/FeedbackContent";

import bugImageUrl from "../../assets/svg/bug.svg";
import lightbulbImageUrl from "../../assets/svg/lightbulb.svg";
import cloudImageUrl from "../../assets/svg/cloud.svg";
import FeedBackSuccessStep from "./Steps/FeedBackSuccessStep";

const feedBackTypes = {
  BUG: {
    title: "Problema",
    icon: bugImageUrl,
    alt: "imagem de um inseto",
  },
  IDEA: {
    title: "Ideias",
    icon: lightbulbImageUrl,
    alt: "Imagem de uma Lâmpada",
  },
  OTHER: {
    title: "Outro",
    icon: cloudImageUrl,
    alt: "Imagem de uma núvem de pensamento",
  },
};

const WidgetForm = ({ toggleWidgetVisibility }) => {
  const [feedBackType, setFeedBackType] = useState(null);
  const [feedBackSent, setFeedBackSent] = useState(false);

  const handleFeedBackRestart = () => {
    setFeedBackSent(false);
    setFeedBackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto text-white">
      {feedBackSent ? (
        <FeedBackSuccessStep onFeedBackRestartRequested={handleFeedBackRestart} toggleWidgetVisibility={toggleWidgetVisibility}/>
      ) : (
        <>
          {!feedBackType ? (
            <FeedBackTypeStep
              toggleWidgetVisibility={toggleWidgetVisibility}
              feedBackTypes={feedBackTypes}
              setFeedBackType={setFeedBackType}
            />
          ) : (
            <FeedBackContentStep
              onFeedBackSent={() => setFeedBackSent(true)}
              handleFeedBackRestart={handleFeedBackRestart}
              feedBackTypes={feedBackTypes}
              feedBackType={feedBackType}
              toggleWidgetVisibility={toggleWidgetVisibility}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito pela{" "}
        <a
          href="https://www.opendota.com/"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          {" "}
          OpenDota
        </a>
      </footer>
    </div>
  );
};

export default WidgetForm;
