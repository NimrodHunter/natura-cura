import React, { useState } from "react";
import styled from 'styled-components'

import backgroundImg from '../../../images/mariposa_copacabana.png';
import BackGroundImg, { IBackGroundImgProps } from '../BackGroundImg/BackGroundImg';


const AboutStyle = styled("div")`
    width: 100%;
    padding-bottom: 200px;

    .initialText {
      margin: 0 10% 0 10%;
      padding: 250px 0 50px 0;
      text-align: center;
      text-rendering: optimizeLegibility;
      font-family: futura-pt, sans-serif;
      font-weight: lighter;
      font-style: normal;
      font-size: 100px;
      line-height: 1.1em;
      letter-spacing: 10px;
      text-transform: none;
      color: #fff;
      z-index: 10;
    }

    .secondText {
      margin: 0 10% 0 10%;
      padding: 0 0 50px 0;
      text-align: center;
      text-rendering: optimizeLegibility;
      font-family: futura-pt, sans-serif;
      font-weight: lighter;
      font-style: normal;
      font-size: 30px;
      line-height: 1.1em;
      letter-spacing: 10px;
      text-transform: none;
      color: #d9d9d9;
      text-transform: uppercase;
      z-index: 10;
    }
`;

const AboutMessageStyle = styled("div")`
    width: 100%;
    background: #fff;

    .initialText {
      margin: 0 20% 0 20%;
      padding: 100px 0 50px 0;
      text-align: center;
      text-rendering: optimizeLegibility;
      font-family: futura-pt, sans-serif;
      font-weight: lighter;
      font-style: normal;
      font-size: 40px;
      line-height: 1.0em;
      letter-spacing: 2px;
      text-transform: none;
      color: #1f1f1f;
      z-index: 10;
    }

    .secondText {
      margin: 0 30% 0 30%;
      padding: 0 0 100px 0;
      text-align: center;
      text-rendering: optimizeLegibility;
      font-family: futura-pt, sans-serif;
      font-weight: lighter;
      font-style: normal;
      font-size: 20px;
      line-height: 1.1em;
      letter-spacing: 0.5px;
      text-transform: none;
      color: rgba(31,31,31,.5);
      z-index: 10;
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
        <p className="initialText">Anibal Catalán contribuye a la sanación de sus pacientes ayudándoles a armonizar con el flujo natural del cuerpo. Utilizando el cuerpo como canal, a través de las manos, ayuda con la disolución parcial o total de bloqueos que pudieran estar obstruyendo la libre expresión de la naturaleza de cada uno.</p>
        <p className="secondText">A través del masaje Anibal se sincroniza con el paciente, llevándolo a un estado de relajación desde el cual procede a identificar y limpiar parcial o totalmente las obstrucciones que se presenten. Al mismo tiempo conversa con el paciente con el fin de que sea consciente de las sensaciones del cuerpo y pueda experimentar cambios en el tiempo y hacer seguimiento de su estado físico presente. Reestableciendo la conexión del paciente con su cuerpo.</p>
      </AboutMessageStyle>
    </React.Fragment>
  );
}

export default About