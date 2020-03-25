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

const HeaderStyle = styled("header")`
  height: 100px;
  width: 100%;
  background: transparent;
  
  font-family: futura-pt, sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;
  line-height: 1em;

  svg.bars-svg {
    display: none;
    fill: #fff;    
  }

  @media (max-width: 874px) {
    .responsive-toolbar {
      display: none;
    }

    svg.bars-svg {
      display: block;
    }

    svg.close-svg {
      fill: #fff;
    }

  }

  .title {
    font-size: 30px;
    color: #fff;
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 2%;
    height: 100%;
    align-items: center;
    float: left;

    a {
      color: #fff;
      text-decoration: none;
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

  .responsive-toolbar {
    height: 100%;
    align-items: center;
    width: 100%;

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
        margin: 20px 20px;
      }

      a {
        color: #fff;
        text-decoration: none;
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
  overflow: hidden;
  height: 100%;
  width: 200px;  
  float: right;
  background: #201a16;
  padding: 20px 25px 100% 25px;
  z-index: 200;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;  

  font-family: futura-pt, sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;
  line-height: 2.5em;

  svg.email-svg, svg.instagram-svg, svg.whatsapp-svg {
    margin: 0px 10px 0px 10px;
    fill: rgba(255,255,255,.4)
  }

  svg.email-svg:hover, svg.instagram-svg:hover, svg.whatsapp-svg:hover {
    fill: #fff;
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    align-items: center;

    li {
      list-style-type: none;
      margin: 20px 20px;
    }

    a {
      color: #fff;
      text-decoration: none;
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
`;

const Header = () => {
  const [ nav, ] = useState<INav>({
    title: 'ANIBAL CATALÁN',
    sections: ['yo', 'masajes'],
    contact: 'contacto'
  })

  const myRef = useRef(null);
  const { width, } = useResize(myRef)

  const [ navOpen, setNavOpen ] = useState(false)

  const toggleBars = {
    display: `${width <= 860 && !navOpen ? 'block' : 'none'}`,
    float: 'right' as 'right',
    background: 'transparent',
    color: 'transparent',
    border: 'none',
    padding: '0px 2% 0px 0px',
    msTransform: 'translateY(100%)',
    transform: 'translateY(100%)'
  }

  const toggleClose = {
    display: `${width < 860 && navOpen ? 'block' : 'none'}`,
    position: 'fixed' as 'fixed',
    right: '200px',
    float: 'right' as 'right',
    background: 'transparent',
    color: 'transparent',
    border: 'none',
    padding: '0px 2% 0px 0px',
    msTransform: 'translateY(100%)',
    transform: 'translateY(100%)',
  }

  const sideBars = {
    display: `${width < 860 && navOpen ? '' : 'none'}`,
    transition: 'display 0s linear 0.5s',
  }

  interface IMedia { 
    name: string
    url: string
  }
  
  const [media, ] = useState<Array<IMedia>>(
    [
      { name: "whatsapp", url: "https://wa.me/56982136757" },
      { name: "instagram", url: "https://www.instagram.com/natura___cura" },
      { name: "email", url: "mailto:anibalcatalanf@gmail.com" }
    ]
  )

  const Social = {
    textAlign: 'center' as 'center',
    padding: '10px 0px 0 0px',
  }

  return (
    <React.Fragment>
      <SideBarStyle ref={ myRef } style={ sideBars }>
      <ul>
        {nav.sections.map(section => {
          return (
            <li key={ section }><Link to ={ `/${ section }` } key={ section }>{ section.toUpperCase() }</Link></li>
          )
        })}
        <li key={ nav.contact }><Link to ={ `/${ nav.contact }` } key={ nav.contact } className="contact">{ nav.contact.toUpperCase() }</Link></li>
      </ul>
      <div style={ Social }>
        <a href={ media[0].url } className={ media[0].name }><WhatsAppSVG width="20%" height="20%"/></a>
        <a href={ media[1].url } className={ media[1].name }><InstagramSVG width="20%" height="20%"/></a>
        <a href={ media[2].url } className={ media[2].name }><EmailSVG width="20%" height="20%"/></a>
      </div>
      </SideBarStyle>
      <HeaderStyle ref={ myRef }>
        <Link to ={ `/` } key={ nav.title } className="title">{ nav.title.toUpperCase() }</Link>
        <button style= { toggleBars } onClick = { () => setNavOpen(!navOpen) }><BarsSVG width="50px" height="33.34px" /></button>
        <button style= { toggleClose } onClick = { () => setNavOpen(!navOpen) }><CloseSVG width="50px" height="33.34px" /></button>
        <nav className="responsive-toolbar">
          <ul>      
            {nav.sections.map(section => {
              return (
                <li key={ section }><Link to ={ `/${ section }` } key={ section }>{ section.toUpperCase() }</Link></li>
              )
            })}
            <li key={ nav.contact }><Link to ={ `/${ nav.contact }` } key={ nav.contact } className="contact">{ nav.contact.toUpperCase() }</Link></li>
          </ul> 
        </nav>
      </HeaderStyle > 
    </React.Fragment>
  );
} 

export default Header;