import React, { useState } from "react";
import styled from 'styled-components'

import backgroundImg from '../../../files/images/alcon_montaña7colores.png';
import BackGroundImg, { IBackGroundImgProps } from '../BackGroundImg/BackGroundImg';

import Engage from './Engage'

const ContactStyle = styled("div")`
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
      font-family: 'Spartan', sans-serif;
      font-size: 2rem;
      letter-spacing: 0.08rem;
      color: #fff;
      z-index: 10;
    }

    @media (min-width: 768px) {
      .initialText {
        font-size: 4rem;
      }
    }

    @media (min-width: 768px) {
      .initialText {
        font-size: 5rem;
      }
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