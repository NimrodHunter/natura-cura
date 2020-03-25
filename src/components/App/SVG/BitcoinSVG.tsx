import React from "react";

interface ISVGProps {
  width?: string
  height?:string
  className?: string
};

const BitcoinSVG = (props: ISVGProps) => 
  <svg
    className= { props.className || "bitcoin-svg" } 
    width= { props.width || "100%" }
    height= { props.height || "100%" }
    viewBox= "0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M 256.19796,7.8263841e-5 C 114.80398,-0.11893906 0.11899997,114.40804 0,255.80203 -0.11899999,397.19601 114.40798,511.88101 255.80196,511.99999 397.17695,511.88094 511.7819,397.37501 511.99991,256.00004 511.99991,114.68505 397.51295,0.11909559 256.19796,7.8263841e-5 Z M 255.80196,469.39999 c -117.85498,0 -213.398966,-95.54498 -213.398966,-213.39995 0,-117.85497 95.543986,-213.398978 213.398966,-213.398978 117.81498,0.119055 213.27997,95.583988 213.39895,213.398978 0,117.85497 -95.54396,213.39995 -213.39895,213.39995 z"/>
		<path d="m 324.95395,243.51705 c 17.12,-9.65 26.373,-28.968 23.183,-48.347 -3.963,-29.91901 -39.628,-41.21401 -67.76499,-43.59099 v -44.97801 h -27.74 v 44.58199 h -18.62499 v -44.58199 h -27.74 v 44.58199 h -55.87699 v 28.73102 h 20.80499 c 9.313,0 13.87,2.77399 13.87,10.30299 v 123.44297 c 0,10.30299 -5.152,13.47401 -10.7,13.47401 h -21.20099 v 29.32498 h 53.89499 v 45.57302 h 27.93799 v -45.57302 h 18.625 v 45.57302 h 27.146 v -45.57302 h 5.944 c 57.06499,0 76.08698,-27.93796 76.08698,-65.98099 -0.456,-22.43097 -16.00999,-41.72999 -37.84499,-46.96097 z m -90.94799,-61.82 h 19.814 c 13.87,0 41.214,2.37801 41.214,24.96601 0.951,14.74198 -9.729,27.66097 -24.372,29.52299 h -36.656 c 0,0 0,-54.489 0,-54.489 z m 30.712,142.66198 v -0.19805 h -30.712 v -59.44297 h 35.666 c 8.322,0 39.62799,2.77398 39.62799,24.96597 0,22.19203 -14.86,34.67501 -44.58199,34.67501 z"/>
  </svg>

export default BitcoinSVG;