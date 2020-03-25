import React from "react";

import styled from 'styled-components'

const FooterStyle = styled("p")`
  text-align: center;
  display: block;
  max-width: 1020px;
  width: auto;
  margin: auto;
  box-sizing: border-box;
  padding: 64px 32px;
  color: rgba(255,255,255,.4);
  font-family: europa, sans-serif;
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: .5px;
  font-weight: 300;
  font-style: normal;
`;

const Footer = () => {
  return (
    <FooterStyle>
      © 2020 ANIBAL CATALÁN
    </FooterStyle>
  );
}

export default Footer;