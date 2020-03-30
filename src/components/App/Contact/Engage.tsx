import React, { useState } from "react";
import styled from 'styled-components'

import EmailSVG from '../SVG/EmailSVG'
import InstagramSVG from '../SVG/InstagramSVG'
import WhatsAppSVG from '../SVG/WhatsAppSVG'
import MapsSVG from '../SVG/MapsSVG'


const MediaStyle = styled("div")`
  padding: 15%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #201a16;;
  
  svg.maps-svg {
    padding-right: 15px
  }

  svg.email-svg, svg.instagram-svg, svg.whatsapp-svg, svg.maps-svg {
    fill: rgba(255,255,255,.4)
  }

  svg.email-svg:hover, svg.instagram-svg:hover, svg.whatsapp-svg:hover, svg.maps-svg:hover {
    fill: #fff;
  }

  .socialText {
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    padding: 0 0 0.2rem 0;
    font-size: 1.6rem;
    color: #d9d9d9;
  }

  .addressText {
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    padding: 1rem 0 0.2rem 0;
    font-size: 1.3rem;;
    color: #d9d9d9;
  }

  .social {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .socialText {
      padding: 0 0 1rem 0;
      font-size: 3rem;
    }

    .addressText {
      padding: 1rem 0 1rem 0;
      font-size: 2rem;;
    }
  }

  @media (min-width: 1150px) {
    .socialText {
      padding: 0 0 1.5rem 0;
      font-size: 4rem;
    }

    .addressText {
      padding: 1rem 0 1.5rem 0;
      font-size: 3rem;;
    }

    svg.maps-svg {
      width: 20%;
    }
  
    svg.email-svg, svg.instagram-svg, svg.whatsapp-svg{
      width: 50%;
    }

    svg.email-svg{
      width: 35%;
    }
  }

  @media (min-width: 1400px) {
    svg.maps-svg {
      width: 15%;
    }
  }

  @media (min-width: 1650px) {
    svg.maps-svg {
      width: 13%;
    }
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
        <div className="social">
          <a href={ media[0].url } className={ media[0].name }><WhatsAppSVG width="60%" height="60%"/></a>
          <a href={ media[1].url } className={ media[1].name }><InstagramSVG width="60%" height="60%"/></a>
          <a href={ media[2].url } className={ media[2].name }><EmailSVG width="44%" height="60%"/></a>
        </div>  
        <p className="addressText">dirección</p>
        <a href={ media[3].url } className={ media[3].name }><MapsSVG width="23%" height="23%"/></a>
      </MediaStyle>
  );
}

export default Engage