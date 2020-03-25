import React from "react";

interface ISVGProps {
  width?: string
  height?: string
  className?: string
};

const CloseSVG = (props: ISVGProps) => {

  return (
    <svg
      className= { props.className || "close-svg" } 
      width= { props.width || "100%" }
      height= { props.height || "100%" }
      viewBox= "0 0 413.348 413.348"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/>
    </svg>
  )
}

export default CloseSVG;