import React, { useState } from "react";
import styled from 'styled-components'

import backgroundImg from '../../../images/atardecer_copacabana.png';
import middleBackgroundImg from '../../../images/bahia_isla_del_sol.png';
import BackGroundImg, { IBackGroundImgProps } from '../BackGroundImg/BackGroundImg';
import scout from '../../../images/scout.png'
import progra from '../../../images/programando.jpeg'
import masaje from '../../../images/sesion_kata_2.png'
import ActivityCard, { IActivityCardProps } from './ActivityCard'


const TopStyle = styled("div")`
  padding: 0 1rem 0 1rem;

  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  text-align: center;
  text-rendering: optimizeLegibility;
  
  .initialPhrase {
    margin-top: 35vh; 
    padding-top: 18vh; 
    font-family: 'Lato', sans-serif;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    color: #d9d9d9;
    z-index: 10;
  }

  .initialText {
    padding-top: 15vh;
    font-family: 'Spartan', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.08rem;
    color: #fff;
    z-index: 10;    
  }

  @media (min-width: 600px) {
    .initialPhrase {
      font-size: 1.5rem;
    }

    .initialText {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1057px) {
    .initialText {
      padding-top: 25vh;
      font-size: 3.5rem;
    }
  }

  .middlePhrase {
    margin: 5% 10% 30px 10%;
    padding: 0 0 100px 0;
    font-size: 100px;
    z-index: 10;
  }

  .middleText {
    margin: 0 10% 5% 10%;
    font-style: italic;
    font-size: 40px;
    line-height: 1.1em;
    letter-spacing: 10px;
    text-transform: uppercase;
    color: #d9d9d9;
    z-index: 10;
  }
  
  `;

  const BottonStyle = styled("div")`
    padding: 100px 5% 100px 5%;
    background-color: #fff;
    width: 100%;

    text-align: center;
    text-rendering: optimizeLegibility;
    font-family: futura-pt, sans-serif;
    font-weight: lighter;
    font-style: normal;
    

    .bottonPhrase {
      margin: 0 10% 50px 10%;
      font-size: 40px;
      text-transform: uppercase;
      line-height: 1.1em;
      color: #1f1f1f;
    }

    .bottonText {
      margin: 0 20% 0 20%;
      font-size: 20px;
      line-height: 1.1em;
      letter-spacing: 0.5px;
      text-transform: none;
      color: rgba(31,31,31,.5);
      z-index: 10;
    }
  `;
    
  const ActivitiesStyle = styled("div")`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-rendering: optimizeLegibility;
    background-color: #fff;

    .activitiesTitle {
      padding: 3rem 0 0 0;
      font-family: 'Spartan', sans-serif;
      font-size: 1rem;
      letter-spacing: 0.08rem;
      line-height: 1.1em;
      text-transform: uppercase;
      color: #1f1f1f;
    }

    @media (min-width: 488px) {
      .activitiesTitle {
        font-size: 1.8rem;
      }
    }

    @media (min-width: 770px) {
      .activitiesTitle {
        font-size: 2rem;
      }
    }

    @media (min-width: 1020px) {
      .activitiesTitle {
        font-size: 3rem;
        padding: 3rem 0 2rem 0;
      }
    }
  `;

const Home = () => {
  
  const [topImg, ] = useState<IBackGroundImgProps>({
    imgUrl: backgroundImg,
    style: TopStyle,
  })

  const [middleImg, ] = useState<IBackGroundImgProps>({
    imgUrl: middleBackgroundImg,
    style: TopStyle,
  })

  const scoutCard: IActivityCardProps = {
    img: scout,
    title: "scout",
    href: "https://www.instagram.com/tripanwenumapu/",
    text: "si tienes entre 7 y 18 años y te gusta explorar la naturaleza, únete a nuestro grupo!",
    imgHeight: '20%',
    imgWidth: '20%'
  }

  const massageCard: IActivityCardProps = {
    img: masaje,
    title: "masajes",
    href: "https://www.instagram.com/natura___cura/",
    text: "los masajes contribuyen a restaurar el flujo natural del cuerpo, pruebalos!",
    imgHeight: '20%',
    imgWidth: '20%'
  }

  const devCard: IActivityCardProps = {
    img: progra,
    title: "programación",
    href: "https://www.linkedin.com/in/anibal-eduardo-catalán-faúndez",
    text: "alguna idea divertida que quieras programar?? escribeme!",
    imgHeight: '20%',
    imgWidth: '20%'
  }

  return (
    <React.Fragment>
        <BackGroundImg { ...topImg } >
          <p className="initialPhrase">Presencia presente y fe</p>
          <p className="initialText">Un puente entre Salud y Naturaleza.</p>
        </BackGroundImg >
        <ActivitiesStyle>
          <p className="activitiesTitle">se tú mismo y disfruta el viaje</p>
          <ActivityCard { ...scoutCard } />
          <ActivityCard { ...massageCard } />
          <ActivityCard { ...devCard } />
        </ActivitiesStyle>
        <BackGroundImg { ...middleImg } >
          <p className="middlePhrase">Natural Cura</p>
          <p className="middleText">“Lo que buscas ya esta ahí, a veces solo tienes que detenerte y relajarte en ti mismo, dejar que se exprese lo que es”.</p>
        </BackGroundImg >
        <BottonStyle>
          <p className="bottonPhrase">Natura Cura es puente que contribuye a restaurar la conexión de las personas con el cuerpo, y de esta forma ayudar a la sanación de la misma.</p>
          <p className="bottonText">Natura Cura lleva al paciente a un estado de relajación presente, con el fin de que este vuelva a estar atento a las sensaciones del cuerpo, en este estado el paciente puede observar como el terapeuta trabaja las zonas donde hay bloqueos que interrumpen el flujo natural del cuerpo y sentir los cambios. A través de este procedimiento poco a poco el paciente aprenderá a estar mas atento de los cambios del cuerpo, recuperando la conexión presente con este.</p>
        </BottonStyle>
    </React.Fragment>
  );
}

export default Home