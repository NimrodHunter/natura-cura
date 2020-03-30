import React, { useState } from "react";

import styled from 'styled-components';

import EmailSVG from '../SVG/EmailSVG';
import InstagramSVG from '../SVG/InstagramSVG';
import WhatsappSVG from '../SVG/WhatsAppSVG';

import ContributionResponsibe from './ContibutionResponsive'

const ContributionStyle = styled("div")`
  padding: 7%;
  background: #f0f0f0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  text-rendering: optimizeLegibility;

  p {
    margin: 0
  }

  .contributionTitle {
    flex-basis: 20%;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    color: #1f1f1f;
  }

  @media (min-width: 590px) {
    .contributionTitle {
      padding-bottom: 5%;
      font-size: 1.5rem;
    } 
  }

  @media (min-width: 760px) {
    .contributionTitle {
      font-size: 1.8rem;
    } 
  }

  @media only screen and (min-width: 1020px) {
    .contributionTitle {
      padding: 5% 0 5% 0;
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 1430px) {
    padding-top: 10%;
    .contributionTitle {
      padding-top: 0%;
      font-size: 2.5rem;
    }
  }
`;

const MediaStyle = styled("div")`
  display: flex;
  text-align: center;
  justify-content: center;

  a {
    padding: 0;
  }

  svg.email-svg:hover, svg.instagram-svg:hover, svg.whatsapp-svg:hover {
    fill: rgba(31,31,31,.5);
  }

  .instagram {
    margin-right: 4%;
  }

  @media only screen and (min-width: 413px) {
    padding-top: 5%;

    a {
      width: 165px;
    }

    .instagram {
      margin: 0 0% 0 0%;
    }

    svg.whatsapp-svg {
      width: 44%;
      height: 30%;
    }
    
    svg.instagram-svg {
      width: 106%;
      height: 30%;
    }

    svg.email-svg {
      width: 38%;
      height: 30%;
    }
  }

  
  } 

`;

interface IMedia { 
  name: string
  url: string
}

const Contribution = () => {

  const [media, ] = useState<Array<IMedia>>(
    [
      { name: "whatsapp", url: "https://wa.me/56982136757" },
      { name: "instagram", url: "https://www.instagram.com/natura___cura" },
      { name: "email", url: "mailto:anibalcatalanf@gmail.com" }

    ]
  )

    return (
      <ContributionStyle>
        <div className="contributionTitle">AYÚDAME A CONTINUAR CON ESTE PROYECTO</div>
        <ContributionResponsibe/>
          <MediaStyle >
            <a href={ media[0].url } className={ media[0].name }><WhatsappSVG width= '50'height= '55%'/></a>
            <a href={ media[1].url } className={ media[1].name }><InstagramSVG width= '50' height= '55%'/></a>
            <a href={ media[2].url } className={ media[2].name }><EmailSVG width= '30' height='55%'/></a>
          </MediaStyle>
      </ContributionStyle>
    );
  }

export default Contribution;