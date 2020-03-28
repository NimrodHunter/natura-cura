import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useResize from './useResize';

import styled from 'styled-components'
import BarsSVG from '../SVG/BarsSVG'
import CloseSVG from '../SVG/CloseSVG'

import EmailSVG from '../SVG/EmailSVG'
import InstagramSVG from '../SVG/InstagramSVG'
import WhatsAppSVG from '../SVG/WhatsAppSVG'

interface INav {
  title: string
  sections: Array<string>
  contact: string
};

interface IMedia { 
  name: string
  url: string
}

const Header = () => {
  const [ nav, ] = useState<INav>({
    title: 'ANIBAL CATALÁN',
    sections: ['yo', 'masajes'],
    contact: 'contacto'
  })

  const myRef = useRef(null);
  const { width, } = useResize(myRef)

  const [ navOpen, setNavOpen ] = useState(false);

  const HeaderStyle = styled("header")`
    height: 4rem;
    width: 100vw;
    min-width: 275px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    li {
      list-style-type: none;
      margin: 0 10px 1.2rem 10px;
    }

    a {
      color: #fff;
      padding: 10px;

      :hover {
        color: #9c9999;
      }

      :focus {
        color: #9c9999;
        outline: thin dotted #fff;
      }
    }

    .contact {
      border: 2px solid #fff;
      border-spacing: 15px;

      :hover {
        color: #181818;
        background: #fff;
      }

      :focus {
        background: #fff;
        color: #181818;
        outline: none;
      }
    }

    .title {
      font-family: 'Lato', sans-serif;
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
      color: #fff;
      padding-inline-start: 3%;

      @media (min-width: 410px) {
        font-size: 1rem;  
      }

      @media (min-width: 480px) {
        font-size: 1.2rem;  
      }

      a {
        color: #fff;
        padding: 10px 10px 10px 10px;
      }

      :hover {
        color: #fff;
      }

      :focus {
        color: #fff;
        outline: none;
      }
    }

    .closeCross {
      display: ${width < 770 && navOpen ? 'block' : 'none'};
      position: fixed;
      right: 34vw
      top: 1.4rem;
      float: right;
      background: transparent;
      border: none;
      fill: #fff;
      padding: 0;
    }

    .sideBar {
      display: ${width < 770 && navOpen ? 'block' : 'none'};
      transition: display 200ms ease;
      overflow-y: hidden;
      height: 100vh;
      width: 35vw;  
      float: right;
      background: #201a16;
      z-index: 200;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      text-align: center;

      font-family: 'Lato', sans-serif;
      font-size: ${width <= 410 && navOpen ? '0.5rem' : '0.8rem' };
      text-transform: uppercase;
      letter-spacing: 0.08rem;
      
      svg.email-svg, svg.instagram-svg, svg.whatsapp-svg {
        margin: ${width <= 410 && navOpen ? '10px 2px 0px 2px' : '10px 10px 0px 10px' };
        fill: rgba(255,255,255,.4)
      }
  
      svg.email-svg:hover, svg.instagram-svg:hover, svg.whatsapp-svg:hover {
        fill: #fff;
      }
  
      ul {
        padding-top: 6vh;
        padding-inline-start: 0;

      }

      @media (min-width: 360px) {
        ul {
          padding-top: 5vh;
        } 
      }

      @media (min-width: 375px) and (min-height: 812px) {
        ul {
          padding-top: 4vh;
        } 
      }

      @media (min-width: 411px) {
        ul {
          padding-top: 4vh;
        } 
      }

      @media (min-width: 768px) {
        ul {
          padding-top: 3vh;
        } 
      }



      .social {
        a {
          padding: 10px 1px 0 1px;
        }
      }
    }

    .openBars {
      display: ${width <= 770 && !navOpen ? 'block' : 'none'};
      transition: display 200ms ease;
      background: transparent;
      border: none;
      padding: 0;
      fill: #fff;
      padding-inline-end: 2%;

      @media (min-width: 770px) {
        display: none;  
      }
    }

    .menu {
      display: ${width >= 770 ? 'block' : 'none'};
      transition: display 200ms ease;

      font-family: 'Lato', sans-serif;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08rem;
      padding-inline-end: 3%;

      @media (min-width: 770px) {
          display: block;  
      }

      ul {
        display: flex;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        height: 100%;
        align-items: center;
        float: right;
        
        li {
          margin: 0 10px 0 10px;
        }
        
      }
    }
  `;
  
  const [media, ] = useState<Array<IMedia>>(
    [
      { name: "whatsapp", url: "https://wa.me/56982136757" },
      { name: "instagram", url: "https://www.instagram.com/natura___cura" },
      { name: "email", url: "mailto:anibalcatalanf@gmail.com" }
    ]
  )

  console.log(navOpen)
  console.log(width)

  return (
      <HeaderStyle ref={ myRef }>
        <Link to ={ `/` } key={ nav.title } className="title">{ nav.title.toUpperCase() }</Link>
        <button className="openBars" onClick = { () => setNavOpen(!navOpen) }><BarsSVG width="50px" height="33.34px" /></button>
        <nav className="menu">
          <ul>      
            {nav.sections.map(section => {
              return (
                <li key={ section }><Link to ={ `/${ section }` } key={ section }>{ section.toUpperCase() }</Link></li>
              )
            })}
            <li key={ nav.contact } ><Link to ={ `/${ nav.contact }` } key={ nav.contact } className="contact">{ nav.contact.toUpperCase() }</Link></li>
          </ul> 
        </nav>
        <div className="sideBar">
          <button className="closeCross" onClick = { () => setNavOpen(!navOpen) }><CloseSVG width="33.33px" height="22.227px" /></button>
          <ul>
            {nav.sections.map(section => {
              return (
                <li key={ section }><Link to ={ `/${ section }` } key={ section } onClick = { () => setNavOpen(!navOpen) } >{ section.toUpperCase() }</Link></li>
              )
            })}
            <li key={ nav.contact }><Link to ={ `/${ nav.contact }` } key={ nav.contact } className="contact"  onClick = { () => setNavOpen(!navOpen) }>{ nav.contact.toUpperCase() }</Link></li>
          </ul>
          <div className="social">
            <a href={ media[0].url } className={ media[0].name } ><WhatsAppSVG width="15%" height="15%"/></a>
            <a href={ media[1].url } className={ media[1].name } ><InstagramSVG width="15%" height="15%"/></a>
            <a href={ media[2].url } className={ media[2].name } ><EmailSVG width="15%" height="15%"/></a>
          </div>
        </div>
      </HeaderStyle > 
  );
} 

export default Header;