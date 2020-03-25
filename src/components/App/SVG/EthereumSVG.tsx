import React from "react";

interface ISVGProps {
  width?: string
  height?:string
  className?: string
};

const EthereumSVG = (props: ISVGProps) => 
  <svg
    className= { props.className || "ethereum-svg" } 
    width= { props.width || "100%" }
    height= { props.height || "100%" }
    viewBox= "0 0 256 417"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon
      points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
      fill="#343434"
    />
    <polygon
      points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
      fill="#8C8C8C"
    />
    <polygon
      points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
      fill="#3C3C3B"
    />
    <polygon
      points="127.962 416.9052 127.962 312.1852 0 236.5852"
      fill="#8C8C8C"
    />
    <polygon
      points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
      fill="#141414"
    />
    <polygon
      points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
      fill="#393939"
    />
  </svg>

export default EthereumSVG;