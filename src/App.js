import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Planet } from './pages/Planet/Planet';
import { MainLayout } from './components/MainLayout/MainLayout';
import { Info } from './pages/Info/Info';
import { injectGlobal } from 'styled-components';
import { BaseTheme } from './theme/BaseTheme';
import { Gradient } from './model/Gradient';

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
  body {
    background-color: ${BaseTheme.backgroundColor};
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`