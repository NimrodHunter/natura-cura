import React from "react";

interface ISVGProps {
  width?: string
  height?:string
  className?: string
};

const EmailSVG = (props: ISVGProps) => 
  <svg
    className= { props.className || "email-svg" } 
    width= { props.width || "100%" }
    height= { props.height || "100%" }
    viewBox= "0 0 512 341.333"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
     d="M 512,0 V 341.33332 H 0 V 0 Z M 100.69334,51.2 256.00001,172.37333 411.30667,51.2 Z M 460.8,290.13333 V 78.50666 l -204.79999,158.72 -204.8,-158.72 v 211.62667 z"
    />
  </svg>

export default EmailSVG;