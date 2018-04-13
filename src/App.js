import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import { MainLayout } from './components/MainLayout/MainLayout';
import { BaseTheme } from './theme/BaseTheme';
import { PlanetInfo } from './pages/PlanetInfo/PlanetInfo';
import { ProjectInfo } from './pages/ProjectInfo/ProjectInfo';
import { NotFound } from './pages/NotFound/NotFound';
import { NoPlanetsLeft } from './pages/NoPlanetsLeft/NoPlanetsLeft';
import StarJedi from './assets/font/Starjedi.ttf'

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <MainLayout>
          <Switch>
            <Route exact path='/' component={PlanetInfo}/>
            <Route path='/info' component={ProjectInfo}/>
            <Route path='/restart' component={NoPlanetsLeft}/>
            <Route component={NotFound}/>
          </Switch>
        </MainLayout>
      </HashRouter>
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
    color: ${BaseTheme.textColor};
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    * {
      font-weight: 100;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  html {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`