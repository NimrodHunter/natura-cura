import React from "react";

interface ISVGProps {
  width?: string
  height?:string
  className?: string
};

const InstagramSVG = (props: ISVGProps) => {
  return (
    <svg
      className= { props.className || "instagram-svg" } 
      width= { props.width || "100%" }
      height= { props.height || "100%" }
      viewBox= "0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
      d="M 510.464,150.45973 C 509.21813,123.20427 504.90027,104.6016 498.56853,88.32 492.032,71.49227 483.2768,57.20747 469.0432,42.97387 454.8096,28.74027 440.54187,19.98507 423.69707,13.44853 407.41547,7.1168 388.79573,2.79893 361.55733,1.55307 334.25067,0.29013 325.5296,0 256,0 186.4704,0 177.74933,0.29013 150.45973,1.536 123.20427,2.78187 104.6016,7.09973 88.32,13.43147 71.492267,19.968 57.207467,28.7232 42.973867,42.9568 28.740267,57.1904 19.985067,71.45813 13.448533,88.30293 7.1168,104.58453 2.798933,123.20427 1.553067,150.44267 0.290133,177.74933 0,186.4704 0,256 0,325.5296 0.290133,334.25067 1.536,361.54027 2.781867,388.79573 7.099733,407.3984 13.431467,423.68 19.968,440.50773 28.7232,454.79253 42.9568,469.02613 c 14.2336,14.2336 28.501333,22.9888 45.34613,29.52534 16.2816,6.33173 34.90134,10.6496 62.13974,11.89546 C 177.74933,511.70987 186.4704,512 256,512 c 69.5296,0 78.25067,-0.29013 105.54027,-1.536 27.25546,-1.24587 45.85813,-5.56373 62.13973,-11.89547 16.82773,-6.53653 31.11253,-15.29173 45.34613,-29.52533 14.2336,-14.2336 22.9888,-28.50133 29.52534,-45.34613 6.33173,-16.2816 10.6496,-34.90134 11.89546,-62.13974 C 511.70987,334.25067 512,325.5296 512,256 c 0,-69.5296 -0.29013,-78.25067 -1.536,-105.54027 z m -46.08,208.98134 c -1.14347,24.95146 -5.30773,38.51946 -8.8064,47.53066 -4.64213,11.94667 -10.1888,20.48 -19.1488,29.44 -8.96,8.96 -17.49333,14.50667 -29.44,19.1488 -9.02827,3.49867 -22.5792,7.68 -47.53067,8.8064 -26.9824,1.2288 -35.08906,1.4848 -103.44106,1.4848 -68.352,0 -76.45867,-0.256 -103.44107,-1.4848 -24.95147,-1.14346 -38.51947,-5.30773 -47.53067,-8.8064 -11.94666,-4.64213 -20.48,-10.1888 -29.439997,-19.1488 -8.96,-8.96 -14.506666,-17.49333 -19.1488,-29.44 -3.498666,-9.02826 -7.68,-22.5792 -8.8064,-47.53066 -1.2288,-26.99947 -1.4848,-35.08907 -1.4848,-103.44107 0,-68.352 0.256,-76.45867 1.4848,-103.44107 1.143467,-24.95146 5.307734,-38.51946 8.8064,-47.53066 4.642134,-11.94667 10.1888,-20.48 19.1488,-29.44 8.959997,-8.96 17.493337,-14.50667 29.439997,-19.1488 9.02827,-3.49867 22.5792,-7.68 47.53067,-8.8064 26.99947,-1.2288 35.08907,-1.4848 103.44107,-1.4848 68.352,0 76.45866,0.256 103.44106,1.4848 24.95147,1.14346 38.51947,5.30773 47.53067,8.8064 11.94667,4.64213 20.48,10.1888 29.44,19.1488 8.96,8.96 14.50667,17.49333 19.1488,29.44 3.49867,9.02826 7.68,22.5792 8.8064,47.53066 1.2288,26.99947 1.4848,35.08907 1.4848,103.44107 0,68.352 -0.256,76.45867 -1.4848,103.44107 z M 256,124.53547 c -72.6016,0 -131.46453,58.86293 -131.46453,131.46453 0,72.6016 58.86293,131.46453 131.46453,131.46453 72.6016,0 131.46453,-58.86293 131.46453,-131.46453 0,-72.6016 -58.86293,-131.46453 -131.46453,-131.46453 z m 0,216.79786 c -47.12107,0 -85.33333,-38.21226 -85.33333,-85.33333 0,-47.12107 38.21226,-85.33333 85.33333,-85.33333 47.12107,0 85.33333,38.21226 85.33333,85.33333 0,47.12107 -38.21226,85.33333 -85.33333,85.33333 z M 392.6528,88.6272 c -16.96427,0 -30.72,13.75573 -30.72,30.72 0,16.96427 13.75573,30.72 30.72,30.72 16.96427,0 30.72,-13.75573 30.72,-30.72 0,-16.96427 -13.75573,-30.72 -30.72,-30.72 z"
      /> 
    </svg>
  )

}
  

export default InstagramSVG;