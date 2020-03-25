import React from "react";
import { Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components'


export interface IMassageCardProps {
  type: string
  price: number
  duration: number
  img: string
  style?: React.CSSProperties | undefined
}

const MassageCard = (props: IMassageCardProps) => {

  const MassageCardStyle = styled("div")`
    
    background: #fff;
    margin: 0 10% 0 10%;
    padding: 5% 0 0% 0;
    
    text-rendering: optimizeLegibility;
    font-family: futura-pt,sans-serif;
    font-weight: lighter;
    font-style: normal;
    line-height: 1.1em;
    text-align: left;

    img {
        padding: 0 0 10% 0;
        max-height: 350px;
    }

    h1 {
        text-transform: uppercase;
        padding: 0 0 30px 0;
        font-size: 35px;
        color: #1f1f1f;
    }

    p {
        line-height: 0.7em;
        font-size: 20px;
        color: rgba(31,31,31,.5);
    }
  `;

  return (
    <React.Fragment>
      <MassageCardStyle>
            <Row>
                <Col>
                    <Image src={ props.img } width="100%" height="100%" />
                </Col>
                <Col>
                    <h1>{ props.type }</h1>
                    <p>Duración: { +props.duration } minutos</p>
                    <p>Costo Normal: ${ props.price } pesos</p>
                    <p>Costo a Domicilio: ${ props.price + 5000 } pesos</p>
                </Col>
            </Row>
      </MassageCardStyle>
    </React.Fragment>
  );
}

export default MassageCard