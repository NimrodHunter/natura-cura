import React from 'react';

import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import Home from '../Home/Home'
import About from '../About/About'
import Massage from '../Massage/Massage'
import Contact from '../Contact/Contact'

const GlobalStyle = createGlobalStyle`
  
  html, #root, body  {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    display: block;
    margin: 0;
    font-family: sans-serif;
    background: #201a16;
    color: #fff;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  a, a:hover {
    text-decoration: none;
    background: transparent;
    color: transparent;
  }

`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />    
        <Router>
          <Header/>
            <Layout>
              <Switch>
                <Route exact={ true } path="/" component={ Home } />                        
                <Route path="/yo" component={ About } />
                <Route path="/masajes" component={ Massage } />
                <Route path="/contacto" component={ Contact } />
                <Route component={ Home } />
              </Switch>
            </Layout>
        </Router>
    </React.Fragment>
  );
}

export default App