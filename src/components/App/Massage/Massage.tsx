import React, { useState, useRef } from "react";
import styled from 'styled-components'
import { Image } from 'react-bootstrap'

import Engage from '../Contact/Engage'
import Modal from './Modal';
import backgroundImg from '../../../images/machupichu.png';
import BackGroundImg, { IBackGroundImgProps } from '../BackGroundImg/BackGroundImg';
import MassageCard, { IMassageCardProps }  from './MassageCard';
import relaxPhoto from '../../../images/sesion_kata_1.png'
import certificado from '../../../images/certificado.png'


const MassageImgStyle = styled("div")`
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
    font-size: 80px;
    line-height: 1.1em;
    letter-spacing: 10px;
    text-transform: none;
    color: #fff;
    z-index: 10;
  }
`;


const MassageStyle = styled("div")`
    background: #fff;
    padding: 5% 0 5% 10%;
    text-align: center;
  }
`;

const CertificateBtnStyle = styled("button")`
    font-family: futura-pt, sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    line-height: 2em;

    background-color: transparent;
    color: #d9d9d9;
    border: 2px solid #d9d9d9;
    border-spacing: 15px;
    cursor: pointer;
    padding: 10px 25px 10px 25px;
    transition: background-color .1s 0s ease-in-out,color .1s 0s ease-in-out;

    :hover {
      color: #181818;
      background: #d9d9d9;
    }

    :focus {
      background: #d9d9d9;
      color: #181818;
      outline: none;
    }

    a {
      color: #fff;
      background: transparent;

      :hover, :active {
        outline: 0;
      }

      :focus {
        color: #181818;
        outline: thin dotted;
      }
    }
  }
`;

const pStyle = {
  zIndex: 10,
  width: '100%',
  margin: '0 0 0 0',
  textAlign: 'center' as 'center',
}

function Massage() {

  const [topImg, ] = useState<IBackGroundImgProps>({
    imgUrl: backgroundImg,
    style: MassageImgStyle,
  })

  const [cards, ] = useState<IMassageCardProps[]>(
    [
      {
        type: 'Relajación',
        price: 10000,
        duration: 45,
        img: relaxPhoto,
      },
      {
        type: 'Descontracturante',
        price: 15000,
        duration: 60,
        img: relaxPhoto,
      }
      ,
      {
        type: 'Ayurvédico',
        price: 20000,
        duration: 60,
        img: relaxPhoto,
      },
      {
        type: 'Tailandés',
        price: 20000,
        duration: 60,
        img: relaxPhoto,
      }
    ]
  )

  const modalRef = useRef(null);

  const openCertificate = () => {
    // @ts-ignore: Object is possibly 'null'.
    modalRef.current.openModal()

  }
  
  return (
    <React.Fragment>
      <BackGroundImg { ...topImg } >
        <p className="initialText">Opciones de masajes</p>
        <p style= { pStyle }>
        <CertificateBtnStyle onClick = { openCertificate }>Certificado</CertificateBtnStyle>
        </p>
      </BackGroundImg >
      <Modal ref = { modalRef}>
        <Image src={ certificado } width="100%" height="100%" />
      </Modal >
      <MassageStyle>
      { cards.map(card => {
        return (
          <MassageCard key={ card.type } { ...card }/>
        )
      })}
      </MassageStyle>
      <Engage/>
    </React.Fragment>
  );
}

export default Massage;