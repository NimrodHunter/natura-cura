import React, { useState } from "react";
import styled from 'styled-components'

import backgroundImg from '../../../files/images/mariposa_copacabana.png';
import BackGroundImg, { IBackGroundImgProps } from '../BackGroundImg/BackGroundImg';


const AboutStyle = styled("div")`
    padding: 0 7% 0 7%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100vh;
    text-rendering: optimizeLegibility;

    p {
      margin: 0
    }
    

    .initialText {
      flex-basis: 20%;
      font-family: 'Lato', sans-serif;
      font-size: 3.5rem;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      color: #fff;
      z-index: 10;
    }

    .secondText {
      font-family: 'Spartan', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0.08rem;
      color: #d9d9d9;
      z-index: 10;
    }

    @media (min-width: 411px) {
      .initialText {
        font-size: 4rem;
      }
  
      .secondText {
        font-size: 2rem;
      }
    }

    @media (min-width: 768px) {
      .initialText {
        font-size: 6rem;
        letter-spacing: 1rem;
      }
  
      .secondText {
        font-size: 4rem;
      }
    }
`;

const AboutMessageStyle = styled("div")`
    padding: 0 7% 0 7%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100vh;
    text-rendering: optimizeLegibility;
    background: #fff;

    .initialText {
      flex-basis: 40%;
      font-family: 'Lato', sans-serif;
      font-size: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      color: #1f1f1f;
      z-index: 10;
    }

    .secondText {
      padding: 0 3% 0 3%;
      font-family: 'Spartan', sans-serif;
      font-size: 0.4rem;
      letter-spacing: 0.08rem;
      color: rgba(31,31,31,.5);
      z-index: 10;
    }

    @media (min-width: 411px) {
      .initialText {
        font-size: 0.6rem;
      }
  
      .secondText {
        font-size: 0.5rem;
      }
    }

    @media (min-width: 768px) {
      .initialText {
        flex-basis: 30%;
        font-size: 0.8rem;
      }
  
      .secondText {
        font-size: 0.7rem;
      }
    }

    @media (min-width: 1024px) {
      .initialText {
        flex-basis: 30%;
        font-size: 1.1rem;
      }
  
      .secondText {
        padding: 0 6% 0 6%;
        font-size: 0.9rem;
      }
    }
`;

const About = () => {

  const [topImg, ] = useState<IBackGroundImgProps>({
    imgUrl: backgroundImg,
    style: AboutStyle,
  })

  return (
    <React.Fragment>
      <BackGroundImg { ...topImg } >
        <p className="initialText">Hola</p>
        <p className="secondText">un gusto poder conocernos.</p>
      </BackGroundImg >
      <AboutMessageStyle>
        <p className="initialText">Anibal Catalán contribuye a la sanación de sus pacientes ayudándoles a armonizar con el flujo natural de su cuerpo. Utilizando el cuerpo como canal, a través de las manos, ayuda con la disolución parcial o total de bloqueos que pudieran estar obstruyendo la libre expresión de la naturaleza de cada uno.</p>
        <p className="secondText">A través del masaje Anibal se sincroniza con el paciente, llevándolo a un estado de relajación desde el cual procede a identificar y limpiar parcial o totalmente las obstrucciones que se presenten. Al mismo tiempo conversa con el paciente con el fin de que sea consciente de las sensaciones del cuerpo y pueda experimentar cambios en el. Con esta practica podrá hacer seguimiento de su estado físico, reestableciendo la conexión del paciente con su cuerpo.</p>
      </AboutMessageStyle>
    </React.Fragment>
  );
}

export default About