import React from "react";
import styled from 'styled-components'


export interface IActivityCardProps {
  img: string
  title: string
  href: string
  text: string
  imgHeight?: string
  imgWidth?: string
}

const ActivityCard = (props: IActivityCardProps) => {

  const ActivityCardStyle = styled("div")`
    justify-content: center;
    text-align: center;
    text-rendering: optimizeLegibility;

    img {
        padding: 1rem 0 1rem 0;
        max-width: 80vw;
    }

    h1 {
        padding: 0.5rem 0; 
        font-family: 'Lato', sans-serif;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.08rem;
        color: #1f1f1f;
    }

    p {
        padding: 0 5%;
        font-family: 'Spartan', sans-serif;
        font-size: 0.4rem;
        text-transform: capitalize;
        letter-spacing: 0.05rem;
        font-weight: 800;
        color: rgba(31,31,31,.5);
    }

    @media (min-width: 488px) {
      h1 {
        font-size: 1.4rem;
      }
  
      p {
        font-size: 0.7rem;
      }
    }

    @media (min-width: 770px) {
      h1 {
        font-size: 1.6rem;
      }
  
      p {
        font-size: 0.8rem;
      }
    }

    @media (min-width: 1020px) {
      h1 {
        font-size: 2.2rem;
      }
  
      p {
        font-size: 1rem;
      }
    }

    @media (min-width: 1440px) {
      align-self: flex-start;
      flex-basis: 28vw;

      img {
        max-width: 28vw;
      }

      h1 {
        font-size: 2rem;
      }
  
      p {
        font-size: 0.8rem;
      }
    }
  `;

  return (
    <ActivityCardStyle>
      <a href= { props.href }><img src={ props.img } alt= { props.title }/></a>
      <a href= { props.href }><h1>{ props.title }</h1></a>
      <p>{ props.text }</p>
    </ActivityCardStyle>
  );
}

export default ActivityCard