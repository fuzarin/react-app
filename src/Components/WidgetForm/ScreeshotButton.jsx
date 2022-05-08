import React, { useState } from "react";
import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import Loading from "./Loading";
import { Trash } from "phosphor-react";

const ScreenshotButton = ({onScreeShotTook, screenShot}) => {
  const [isTakingScreeshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html"));
    const base64image = canvas.toDataURL("image/png");
    onScreeShotTook(base64image);
    setIsTakingScreenshot(false);
  };

  if(screenShot) {
   return(
     <button 
      type="button" 
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      onClick={() => onScreeShotTook(null)}
      style={{
       backgroundImage: `url(${screenShot})`,
       backgroundPosition: 'center',
       backgroundSize: 130
      }}
     >
       <Trash weight="fill"/>
     </button>
   )
 }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:border-primary-500 focus:ring-primary-500 focus:ring-1 focus:outline-none"
    >
      {isTakingScreeshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
};

export default ScreenshotButton;
