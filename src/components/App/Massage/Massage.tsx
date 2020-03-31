import React, { useState, useRef } from "react";
import styled from 'styled-components'
// import { pdfjs, Document } from 'react-pdf';

import Engage from '../Contact/Engage'
import Modal from './Modal';

import backgroundImg from '../../../files/images/machupichu.png';
import BackGroundImg, { IBackGroundImgProps } from '../BackGroundImg/BackGroundImg';
import MassageCard, { IMassageCardProps }  from './MassageCard';
import relaxPhoto from '../../../files/images/sesion_kata_1.png';

//import certificado from '../../../files/certificado_masaje.pdf';

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const MassageImgStyle = styled("div")`
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
    flex-basis: 30%;
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    color: #fff;
    z-index: 10;
  }

  @media (min-width: 375px) {
    .initialText {
      flex-basis: 45%;
      font-size: 3rem;
    }
  }

  @media (min-width: 768px) {
    .initialText {
      flex-basis: 40%;
      font-size: 5rem;
    }
  }

  @media (min-width: 1024px) {
    .initialText {
      flex-basis: 30%;
      font-size: 6rem;
    }
  }
`;


const MassageStyle = styled("div")`
    padding: 15% 7% 10% 5%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-rendering: optimizeLegibility;
    background: #fff;
`;

const CertificateBtnStyle = styled("button")`
    font-family: futura-pt, sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    line-height: 2em;
    z-index: 10;

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
        outline: none;
      }
    }
  }
`;

const IframeStyle = styled("div")`
  width: 100%;
  height: 100%;
  iframe {
    height: 90%;
    width: 100%;  
    border: none;
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
  //<Document file= "https://drive.google.com/open?id=1MX8j07hNqhyW8meFyVeMY5taeWrIFKWp" />

  return (
    <div >
      <Modal ref = { modalRef} >
        <IframeStyle>
          <iframe title="certificate" src="https://drive.google.com/file/d/1MX8j07hNqhyW8meFyVeMY5taeWrIFKWp/preview"/>
        </IframeStyle>
      </Modal >
      <BackGroundImg { ...topImg } >
        <p className="initialText">Opciones de masajes</p>
        <p style= { pStyle }>
          <CertificateBtnStyle onClick = { openCertificate } >Certificado</CertificateBtnStyle>
        </p>
      </BackGroundImg >
      <MassageStyle>
      { cards.map(card => {
        return (
          <MassageCard key={ card.type } { ...card }/>
        )
      })}
      </MassageStyle>
      <Engage/>
    </div>
  );
}

export default Massage;