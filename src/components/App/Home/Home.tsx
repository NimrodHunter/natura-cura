import React, { useState } from "react";
import { Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components'

import backgroundImg from '../../../images/atardecer_copacabana.png';
import middleBackgroundImg from '../../../images/bahia_isla_del_sol.png';
import BackGroundImg, { IBackGroundImgProps } from '../BackGroundImg/BackGroundImg';
import scout from '../../../images/scout.png'
import progra from '../../../images/programando.jpeg'
import masaje from '../../../images/sesion_kata_2.png'

const HomeStyle = styled("div")`
  padding: 100px 5% 100px 5%;

  text-align: center;
  text-rendering: optimizeLegibility;
  font-family: futura-pt, sans-serif;
  font-margin: 0 10% 0 10%;
  font-weight: lighter;
  font-style: normal;
  font-size: 30px;
  line-height: 1.3em;
  letter-spacing: 4px;
  color: #fff;

  .initialPhrase {
    margin: 50px 0 0 0;
    padding: 100px 0 0px;
    color: #d9d9d9;
    z-index: 10;
    text-transform: uppercase;
  }

  .initialText {
    margin: 100px 0 0 0;
    padding: 50px 0 200px;
    font-size: 70px;
    line-height: 1.1em;
    letter-spacing: 10px;
    z-index: 10;    
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
    padding: 100px 5% 100px 5%;
    background-color: #fff;
    width: 100%;

    .activitiesText {
      padding: 25px 0 50px 0;
      text-align: center;
      text-rendering: optimizeLegibility;
      font-family: futura-pt, sans-serif;
      font-weight: lighter;
      font-style: normal;
      font-size: 40px;
      line-height: 1.1em;
      text-transform: uppercase;
      color: #1f1f1f;
    }
  `;

  const ActivitiesTitle = styled("div")`
    margin-top: 25px;
    text-align: center;
    width: 100%;
    a, p {
      text-align: center;
      line-height: 1.1em;
      font-family: futura-pt, sans-serif;
      font-weight: lighter;
      font-style: normal;
      font-size: 30px;
      color: rgba(31,31,31,.5);
    }
  `;

  const ActivitiesBody = styled("div")`
    margin-top: 25px;
    text-align: center;
    font-family: europa, sans-serif;
    font-weight: 100;
    font-style: normal;
    font-size: 15px;
    line-height: 1.1em;
    color: #1f1f1f;
    text-transform: uppercase;

  `;

  const MarginCol = {
    margin: `0 15px 0 15px`
  }

  const MarginRow = {
    margin: `0 100px 0 100px`
  }

const Home = () => {
  
  const [topImg, ] = useState<IBackGroundImgProps>({
    imgUrl: backgroundImg,
    style: HomeStyle,
  })

  const [middleImg, ] = useState<IBackGroundImgProps>({
    imgUrl: middleBackgroundImg,
    style: HomeStyle,
  })

  return (
    <React.Fragment>
        <BackGroundImg { ...topImg } >
          <p className="initialPhrase">Presencia presente y fe</p>
          <p className="initialText">Un puente entre Salud y Naturaleza.</p>
        </BackGroundImg >
        <ActivitiesStyle>
          <p className="activitiesText">se tú mismo y disfruta el viaje</p>
          <Row style={ MarginRow }>
            <Col style={ MarginCol }>
              <Row>
                <a href="https://www.instagram.com/tripanwenumapu/"><Image src={ scout } width="100%" height="100%" /> </a>
              </Row>   
              <Row>       
                <ActivitiesTitle><a href="https://www.instagram.com/tripanwenumapu/"> Scout</a></ActivitiesTitle>
              </Row> 
              <Row>
                <ActivitiesBody><p>Si tienes entre 7 y 18 años y te gusta explorar la naturaleza, únete a nuestro grupo!</p></ActivitiesBody>
              </Row>
            </Col>
            <Col style={ MarginCol }>
              <Row>
                <Image src={ masaje } width="100%" height="100%" />
              </Row> 
              <Row> 
                <ActivitiesTitle><a href="https://www.instagram.com/natura___cura/">Masajes</a></ActivitiesTitle>
              </Row> 
              <Row>
                <ActivitiesBody><p>Los masajes contribuyen a restaurar el flujo natural del cuerpo, Pruebalos!</p></ActivitiesBody>
              </Row>
            </Col>
            <Col style={ MarginCol }>
              <Row>
                <a href="https://www.linkedin.com/in/anibal-eduardo-catalán-faúndez"><Image src={ progra } width="100%" height="100%" /> </a>
              </Row>   
              <Row>       
                <ActivitiesTitle><a href="https://www.linkedin.com/in/anibal-eduardo-catalán-faúndez/"> Programación</a></ActivitiesTitle>
              </Row> 
              <Row>
                <ActivitiesBody><p>Alguna idea divertida que quieras programar?? Escribeme!</p></ActivitiesBody>
              </Row>
            </Col>
          </Row>
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