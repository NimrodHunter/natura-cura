import React, { useState } from "react";

import styled from 'styled-components'

import BancoEstadoSVG from '../SVG/BancoEstadoSVG'
import BitcoinSVG from '../SVG/BitcoinSVG'
import EmailSVG from '../SVG/EmailSVG'
import EthereumSVG from '../SVG/EthereumSVG'
import InstagramSVG from '../SVG/InstagramSVG'
import WhatsappSVG from '../SVG/WhatsAppSVG'

const ContributionStyle = styled("div")`
  color: #1f1f1f;
  background-color: #f0f0f0;
  width: 100%;
  max-width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 30px;
  margin: 0 0 17px 0;
  -moz-box-sizing: border-box;
  font-family: futura-pt, sans-serif;
  text-transform: none;
  letter-spacing: 0px;
  font-weight: 300;
  font-style: normal;
  text-rendering: optimizeLegibility;

  .contributionTitle {
    padding: 30px;
  }

  .contributionOption {
    padding: 10px;
    font-size: 15px;
    text-align: justify;
    margin: 0 auto;
    width: 50em;
  }
  
  svg.banco_estado-svg, svg.bitcoin-svg {
    margin: 0px 15px 0px 0px;
  }

  svg.ethereum-svg {
    margin: 0px 23px 0px 7px;
  }
  img.ethereum {
    padding-left: 10px;
    padding-right: 15px;
  }

  a {
    color: #1f1f1f;
  }

  a:hover {
    color: rgba(31,31,31,.5);
  }
`;

const MediaStyle = styled("div")`
  text-decoration: none !important;
  text-align: center;
  display: block;
  margin: 50px 0px 30px 0px;
  
  svg.email-svg, svg.instagram-svg, svg.whatsapp-svg {
    margin: 0px 10px 0px 10px;
  }

  svg.email-svg:hover, svg.instagram-svg:hover, svg.whatsapp-svg:hover {
    fill: rgba(31,31,31,.5);
  }

`;

interface IAccount { 
  name: string
  number: string
  link: string | undefined
}

interface IMedia { 
  name: string
  url: string
}

const Contribution = () => {
  const [accounts, ] = useState<Array<IAccount>>(
    [
      { name: "Banco Estado", number: "17697388", link: undefined },
      { name: "Bitcoin", number: "1M3Kjy6NHuvdEGWaBkwjDQehVYBtVv49HY", link: "https://live.blockcypher.com/btc/address/1M3Kjy6NHuvdEGWaBkwjDQehVYBtVv49HY" },
      { name: "Ethereum", number: "0x3771eEf3E76329ac4c17962A158A895545795C0d", link: "https://etherscan.io/address/0x3771eef3e76329ac4c17962a158a895545795c0d"} 
    ]
  )

  const [media, ] = useState<Array<IMedia>>(
    [
      { name: "whatsapp", url: "https://wa.me/56982136757" },
      { name: "instagram", url: "https://www.instagram.com/natura___cura" },
      { name: "email", url: "mailto:anibalcatalanf@gmail.com" }

    ]
  )

    return (
      <ContributionStyle>
        <div className="contributionTitle">AYÚDAME A CONTINUAR CON ESTE PROYECTO</div>
        <p className="contributionOption"><BancoEstadoSVG width="6%" height="6%"/>Cuenta Vista { accounts[0].name } Número: { accounts[0].number}</p>
        <p className="contributionOption"><BitcoinSVG width="6%" height="6%"/>Dirección { accounts[1].name }: <a href={accounts[1].link}>{ accounts[1].number}</a></p>
        <p className="contributionOption"><EthereumSVG width="4%" height="4%"/>Dirección { accounts[2].name }: <a href={accounts[2].link}>{ accounts[2].number}</a></p>
          <MediaStyle >
            <a href={ media[0].url } className={ media[0].name }><WhatsappSVG width="2%" height="2%"/></a>
            <a href={ media[1].url } className={ media[1].name }><InstagramSVG width="2%" height="2%"/></a>
            <a href={ media[2].url } className={ media[2].name }><EmailSVG width="2%" height="2%"/></a>
          </MediaStyle>
      </ContributionStyle>
    );
  }

export default Contribution;