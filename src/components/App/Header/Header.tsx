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
    height: 10vh;
    width: 100vW;
    background: transparent;

    svg.bars-svg {
      display: block;
      fill: #fff;    
    }

    @media (min-width: 770px) {
      .responsive-toolbar {
        display: block;
      }

      svg.bars-svg {
        display: none;
      }

      svg.close-svg {
        fill: #fff;
      }

    }

    .title {
      height: 100%;
      font-family: 'Lato', sans-serif;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      color: #fff;
      display: flex;
      padding-inline-start: 5%;
      float: left;
      align-items: center;

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

    .openBars {
      display: ${width <= 770 && !navOpen ? 'block' : 'none'};
      transition: display 200ms ease;
      padding: 0;
      padding-inline-end: 3%;
      height: 100%;
      float: right;
      background: transparent;
      border: none;
    }

    .menu {
      display: ${width >= 770 ? 'block' : 'none'};
      transition: display 200ms ease;
      height: 100%;
      width: 100%;
      align-items: center;

      font-family: 'Lato', sans-serif;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08rem;
      padding-inline-end: 5%;

      ul {
        display: flex;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        height: 100%;
        align-items: center;
        float: right;

        li {
          list-style-type: none;
          margin: 0 0 0 1rem;
        }

        a {
          color: #fff;
          padding: 10px 10px 10px 10px;

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
      }
    }
  `;
  
  const SideBarStyle = styled("div")`
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
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;

    .closeCross {
      display: ${width < 770 && navOpen ? 'block' : 'none'};
      transition: display 200ms ease;
      position: fixed;
      right: 34vw;
      float: right;
      background: transparent;
      border: none;
      fill: #fff;
      padding: 0;
      height: 10vh;
    }
    
    svg.email-svg, svg.instagram-svg, svg.whatsapp-svg {
      margin: 10px 10px 0px 10px;
      fill: rgba(255,255,255,.4)
    }

    svg.email-svg:hover, svg.instagram-svg:hover, svg.whatsapp-svg:hover {
      fill: #fff;
    }

    ul {
      padding-top: 3.3vh;
      margin-block-start: 0;
      padding-inline-start: 0;

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
    }
  `;
  
  const [media, ] = useState<Array<IMedia>>(
    [
      { name: "whatsapp", url: "https://wa.me/56982136757" },
      { name: "instagram", url: "https://www.instagram.com/natura___cura" },
      { name: "email", url: "mailto:anibalcatalanf@gmail.com" }
    ]
  )

  return (
    <React.Fragment>
      <SideBarStyle ref={ myRef } >
        <button className="closeCross" onClick = { () => setNavOpen(!navOpen) }><CloseSVG width="33.33px" height="22.227px" /></button>
        <ul>
          {nav.sections.map(section => {
            return (
              <li key={ section }><Link to ={ `/${ section }` } key={ section } onClick = { () => setNavOpen(!navOpen) } >{ section.toUpperCase() }</Link></li>
            )
          })}
          <li key={ nav.contact }><Link to ={ `/${ nav.contact }` } key={ nav.contact } className="contact"  onClick = { () => setNavOpen(!navOpen) }>{ nav.contact.toUpperCase() }</Link></li>
        </ul>
        <div>
          <a href={ media[0].url } className={ media[0].name } ><WhatsAppSVG width="15%" height="15%"/></a>
          <a href={ media[1].url } className={ media[1].name } ><InstagramSVG width="15%" height="15%"/></a>
          <a href={ media[2].url } className={ media[2].name } ><EmailSVG width="15%" height="15%"/></a>
        </div>
      </SideBarStyle>
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
      </HeaderStyle > 
    </React.Fragment>
  );
} 

export default Header;