import React from "react";
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

    img {
        padding: 0 0 10% 0;
        max-height: 200px;
        max-width: 340px;
    }

    h1 {
        margin: 0;
        font-family: 'Lato', sans-serif;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        padding: 0 0 0.7rem 0;
        font-size: 1.1rem;
        color: #1f1f1f;
    }

    p {
        margin: 0;
        font-family: 'Spartan', sans-serif;
        letter-spacing: 0.08rem;
        line-height: 0.7em;
        font-size: 0.5rem;
        color: rgba(31,31,31,.5);
        padding: 0rem 0 0.7rem 0;
    }

    @media (min-width: 768px) {
        img {
            padding: 0 0 5% 0;
            max-height: 500px;
            max-width: none;
        }
    
        h1 {
            font-size: 2rem;
            padding: 0 0 1rem 0;
        }
    
        p {
            font-size: 1rem;
        }
    }

    @media (min-width: 1024px) {
        img {
            max-width: 700px;
        }
    }

    @media (min-width: 1160px) {
        display: flex;
        flex-direction: row;
        justify-content: start;
        text-align: left;
        margin-left: 4%;

        img {
            max-width: 500px;
            max-height: 450px;
        }

        h1 {
            padding: 1rem 0 1.5rem 2rem;
        }
    
        p {
            padding: 1rem 0 1.5rem 2rem;
        }
    }

    @media (min-width: 1350px) {
        margin-left: 10%;
    }

    @media (min-width: 1700px) {
        margin-left: 18%;
    }

  `;

  return (
      <MassageCardStyle>
        <img src={ props.img } width="100%" height="100%" alt="sesiones"/>
        <div className="content">
            <h1>{ props.type }</h1>
            <p>Duración: { +props.duration } minutos</p>
            <p>Costo Normal: ${ props.price } pesos</p>
            <p>Costo a Domicilio: ${ props.price + 5000 } pesos</p>
        </div>
      </MassageCardStyle>
  );
}

export default MassageCard