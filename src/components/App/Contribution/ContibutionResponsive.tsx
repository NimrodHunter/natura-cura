import React, { useState } from "react";
import styled from 'styled-components'

import BancoEstadoSVG from '../SVG/BancoEstadoSVG';
import BitcoinSVG from '../SVG/BitcoinSVG';
import EthereumSVG from '../SVG/EthereumSVG';

const ContibutionResponsiveStyle = styled("div")`

    p {
        margin: 0
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: 'Spartan', sans-serif;
    color: rgba(31,31,31,.5);
    padding-bottom: 20%;

    .estado {
      padding-bottom: 1rem;
      font-size: 0.43rem;
      letter-spacing: 0.002rem;
    }

    .bitcoin {
      padding-bottom: 1rem;
      font-size: 0.5rem;
      letter-spacing: 0.002rem;
    }

    .ethereum {
      padding-bottom: 1rem;
      font-size: 0.38rem;
      letter-spacing: 0.002rem;
    }

    .bitcoinAddress {
      font-size: 0.35rem;
    }
       
    .ethereumAddress {
      font-size: 0.3rem;
    }  

    svg.banco_estado-svg, svg.bitcoin-svg {
      margin: 0px 15px 0px 0px;
    }
    
    svg.ethereum-svg {
      margin: 0px 15px 0px 0px;
    }
    
    img.ethereum {
      padding-left: 10px;
      padding-right: 15px;
    }
    
    a {
      color: rgba(31,31,31,.5);;
    }
    
    a:hover {
      color: #1f1f1f;
    }

    @media (min-width: 365px) {
        .estado {
            font-size: 0.5rem;
          }
      
          .bitcoin {
            font-size: 0.6rem;
          }
      
          .ethereum {
            font-size: 0.45rem;
          }
      
          .bitcoinAddress {
            font-size: 0.41rem;
          }
             
          .ethereumAddress {
            font-size: 0.35rem;
          }  
    }

    @media (min-width: 413px) {
        .estado {
            font-size: 0.58rem;
          }
      
          .bitcoin {
            font-size: 0.62rem;
          }

          .bitcoinAddress {
            font-size: 0.48rem;
          }
      
          .ethereum {
            font-size: 0.5rem;
          }      
             
          .ethereumAddress {
            font-size: 0.4rem;
          }
    }

    @media (min-width: 590px) {
        padding-top: 0;
        

        .estado {
            font-size: 0.8rem;
          }
      
          .bitcoin {
            font-size: 0.8rem;
          }

          .bitcoinAddress {
            font-size: 0.7rem;
          }
      
          .ethereum {
            font-size: 0.7rem;
          }      
             
          .ethereumAddress {
            font-size: 0.59rem;
          }

          svg.banco_estado-svg, svg.bitcoin-svg, svg.ethereum-svg {
            width: 8%;
          }

          svg.bitcoin-svg {
            margin: 0px 15px 0px 15px;
          }
          
          svg.ethereum-svg {
            margin: 0px 15px 0px 25px;
          }
        }
    
      @media (min-width: 760px) { 
        padding: 0 12% 10% 12%;
      }

      @media (min-width: 1020px) {
        padding: 0 12% 3% 12%;

        .estado {
          font-size: 1.1rem;
        }
    
        .bitcoin {
          font-size: 1rem;
        }

        .bitcoinAddress {
          font-size: 1rem;
        }
    
        .ethereum {
          font-size: 1rem;
        }      
           
        .ethereumAddress {
          font-size: 0.8rem;
        }
      }

      @media only screen and (min-width: 1020px) {
        svg.bitcoin-svg {
          margin: 0px 16px 0px 28px;
        }
      }

      @media only screen and (min-width: 1430px) {
        svg.banco_estado-svg, svg.bitcoin-svg, svg.ethereum-svg {
          width: 5%;
        }
      }

      @media only screen and (min-width: 1650px) {
        padding: 0% 12% 0% 12%;
      }
`;

interface IAccount { 
    name: string
    number: string
    link: string | undefined
}

const ContibutionResponsive = () => {

    const [accounts, ] = useState<Array<IAccount>>(
        [
          { name: "Banco Estado", number: "17697388", link: undefined },
          { name: "Bitcoin", number: "1M3Kjy6NHuvdEGWaBkwjDQehVYBtVv49HY", link: "https://live.blockcypher.com/btc/address/1M3Kjy6NHuvdEGWaBkwjDQehVYBtVv49HY" },
          { name: "Ethereum", number: "0x3771eEf3E76329ac4c17962A158A895545795C0d", link: "https://etherscan.io/address/0x3771eef3e76329ac4c17962a158a895545795c0d"} 
      ]
    )

    return (
        <ContibutionResponsiveStyle>
            <p className="estado"><BancoEstadoSVG width="10%" height="100%"/>Cuenta Vista { accounts[0].name } Número: { accounts[0].number}</p>
            <p className="bitcoin"><BitcoinSVG width="10%" height="100%"/><a href={accounts[1].link}>{ accounts[1].name }: </a><a href={accounts[1].link} className="bitcoinAddress">{ accounts[1].number}</a></p>
            <p className="ethereum"><EthereumSVG width="10%" height="100%"/><a href={accounts[1].link}>{ accounts[2].name }: </a><a href={accounts[2].link} className="ethereumAddress">{ accounts[2].number}</a></p>
        </ContibutionResponsiveStyle>
    );
}

export default ContibutionResponsive