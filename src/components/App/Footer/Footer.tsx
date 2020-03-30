import React from "react";

import styled from 'styled-components'

const FooterStyle = styled("p")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: rgba(255,255,255,.4);
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  height: 7rem;

  @media only screen and (min-width: 320px) {
    transform: translateY(10%);
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      © 2020 ANIBAL CATALÁN
    </FooterStyle>
  );
}

export default Footer;