import React, { useState } from "react";
import styled from 'styled-components'

import backgroundImg from '../../../images/alcon_montaña7colores.png';
import BackGroundImg, { IBackGroundImgProps } from '../BackGroundImg/BackGroundImg';

import Engage from './Engage'

const ContactStyle = styled("div")`
    height: 100%;
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
`;

const Contact = () => {

  const [topImg, ] = useState<IBackGroundImgProps>({
    imgUrl: backgroundImg,
    style: ContactStyle,
  })

  return (
    <React.Fragment>
      <BackGroundImg { ...topImg } >
        <p className="initialText">Enviame una señal</p>
      </BackGroundImg >
      <Engage/>
    </React.Fragment>
  );
}

export default Contact