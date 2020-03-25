import React from "react";

interface ISVGProps {
  width?: string
  height?: string
  className?: string
  onClick?: CallableFunction
};

const BarsSVG = (props: ISVGProps) => {

  return (
    <svg
      className= { props.className || "bars-svg" } 
      width= { props.width || "100%" }
      height= { props.height || "100%" }
      viewBox= "0 0 459 459"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"/>
    </svg>
  )
}

export default BarsSVG;