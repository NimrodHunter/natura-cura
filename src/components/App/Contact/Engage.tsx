import React, { useState } from "react";
import styled from 'styled-components'

import EmailSVG from '../SVG/EmailSVG'
import InstagramSVG from '../SVG/InstagramSVG'
import WhatsAppSVG from '../SVG/WhatsAppSVG'
import MapsSVG from '../SVG/MapsSVG'


const MediaStyle = styled("div")`
  text-decoration: none !important;
  text-align: center;
  display: block;
  padding: 100px 0px 100px 0px;
  background-color: #201a16;;
  
  svg.maps-svg {
    padding-right: 15px
  }

  svg.email-svg, svg.instagram-svg, svg.whatsapp-svg, svg.maps-svg {
    margin: 0px 30px 0px 30px;
    fill: rgba(255,255,255,.4)
  }

  svg.email-svg:hover, svg.instagram-svg:hover, svg.whatsapp-svg:hover, svg.maps-svg:hover {
    fill: #fff;
  }

  .socialText {
    margin: 0 10% 0 10%;
    padding: 0px 0 60px 0;
    text-align: center;
    text-rendering: optimizeLegibility;
    font-family: futura-pt, sans-serif;
    font-weight: lighter;
    font-style: normal;
    font-size: 70px;
    line-height: 1.1em;
    letter-spacing: 10px;
    color: #d9d9d9;
    text-transform: uppercase;
  }

  .addressText {
    margin: 0 10% 0 10%;
    padding: 80px 0 60px 0;
    text-align: center;
    text-rendering: optimizeLegibility;
    font-family: futura-pt, sans-serif;
    font-weight: lighter;
    font-style: normal;
    font-size: 40px;
    line-height: 1.1em;
    letter-spacing: 10px;
    text-transform: uppercase;
    color: #d9d9d9;
  }
`;

interface IMedia { 
  name: string
  url: string
}

const Engage = () => {

  const [media, ] = useState<Array<IMedia>>(
    [
      { name: "whatsapp", url: "https://wa.me/56982136757" },
      { name: "instagram", url: "https://www.instagram.com/natura___cura" },
      { name: "email", url: "mailto:anibalcatalanf@gmail.com" },
      { name: "maps", url: "https://goo.gl/maps/V3Bh4AZrAkDPq8LVA" }
    ]
  )

  return (
      <MediaStyle>
        <p className="socialText">reservas</p>
        <a href={ media[0].url } className={ media[0].name }><WhatsAppSVG width="4%" height="4%"/></a>
        <a href={ media[1].url } className={ media[1].name }><InstagramSVG width="4%" height="4%"/></a>
        <a href={ media[2].url } className={ media[2].name }><EmailSVG width="4%" height="4%"/></a>
        <p className="addressText">dirección</p>
        <a href={ media[3].url } className={ media[3].name }><MapsSVG width="9%" height="9%"/></a>
      </MediaStyle>
  );
}

export default Engage