import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Planet } from './pages/Planet/Planet';
import { MainLayout } from './components/MainLayout/MainLayout';
import { Info } from './pages/Info/Info';
import { injectGlobal } from 'styled-components';
import { BaseTheme } from './theme/BaseTheme';
import StarJedi from './assets/font/Starjedi.ttf'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Route exact path='/' component={Planet}/>
          <Route path='/info' component={Info}/>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

// Global style
// eslint-disable-next-line
injectGlobal`
  @font-face {
     font-family: 'StarJedi';
     src: url(${StarJedi}) format('truetype');
     font-weight: normal;
     font-size: normal;
  }
  body {
    background-color: ${BaseTheme.backgroundColor};
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`