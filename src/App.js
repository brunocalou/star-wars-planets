import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/MainLayout';
import { injectGlobal } from 'styled-components';
import { BaseTheme } from './theme/BaseTheme';
import { PlanetInfo } from './pages/PlanetInfo/PlanetInfo';
import { ProjectInfo } from './pages/ProjectInfo/ProjectInfo';
import StarJedi from './assets/font/Starjedi.ttf'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Route exact path='/' component={PlanetInfo}/>
          <Route path='/info' component={ProjectInfo}/>
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
  html {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`