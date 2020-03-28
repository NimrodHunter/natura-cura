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
  padding: 0 7% 0 7%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 100vh;
  text-rendering: optimizeLegibility;

  p {
    margin: 0
  }
  
  .initialPhrase { 
    font-family: 'Lato', sans-serif;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    color: #d9d9d9;
    z-index: 10;
  }

  .initialText {
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
  
  `;

  const MiddleStyle = styled("div")`
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

  .middlePhrase {
    flex-basis: 30%;
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
  }

  .middleText {
    font-family: 'Spartan', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.08rem;
    font-style: italic;
    color: #d9d9d9;
  }

  @media (min-width: 600px) {
    .middlePhrase {
      font-size: 2rem;
    }

    .middleText {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1057px) {
    .middlePhrase {
      font-size: 3rem;
    }

    .middleText {
      font-size: 2rem;
    }
  }
  
  `;

  const BottonStyle = styled("div")`
    padding: 0 7% 0 7%;
    background: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100vh;
    text-rendering: optimizeLegibility;

    p {
      margin: 0
    }
    

    .bottonPhrase {
      flex-basis: 30%;
      font-family: 'Lato', sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.08rem;
      color: #1f1f1f;
    }

    .bottonText {
      font-family: 'Spartan', sans-serif;
      font-size: 0.7rem;
      letter-spacing: 0.08rem;
      font-style: italic;
      color: rgba(31,31,31,.5);
    }

    @media (min-width: 600px) {
      .bottonPhrase {
        font-size: 1.4rem;
      }
  
      .bottonText {
        padding: 0 7% 0 7%;
        font-size: 1rem;
      }
    }
  
    @media (min-width: 1017px) {
      .bottonPhrase {
        font-size:1.8rem;
      }
  
      .bottonText {
        font-size: 1.2rem;
      }
    }

    @media (min-width: 1430px) {
      .bottonPhrase {
        font-size:2.1rem;
      }
  
      .bottonText {
        padding: 0 9% 0 9%;
      }
    }
  `;
    
  const ActivitiesStyle = styled("div")`
    padding: 7%
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-rendering: optimizeLegibility;
    background-color: #fff;

    .activitiesTitle {
      padding: 2.5rem 0 0 0;
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

    @media (min-width: 1440px) {
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      .activitiesTitle {
        flex-basis: 100vw;
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
    style: MiddleStyle,
    height: '100vh',
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
          <p className="middlePhrase">Natura Cura</p>
          <p className="middleText">“Lo que buscas ya esta ahí, a veces solo tienes que detenerte y relajarte en ti mismo, dejar que se exprese lo que es”.</p>
        </BackGroundImg >
        <BottonStyle>
          <p className="bottonPhrase">Natura Cura es un puente que restaurar la conexión con el cuerpo, de esta forma ayuda a la sanación del mismo.</p>
          <p className="bottonText">El paciente entra en un estado de relajación presente, quedando atento a las sensaciones del cuerpo, en este estado observa como el terapeuta trabaja las zonas bloqueadas que interrumpen el flujo natural del cuerpo. Al sentir los cambios evalua su evolucion en el tiempo.</p>
        </BottonStyle>
    </React.Fragment>
  );
}

export default Home