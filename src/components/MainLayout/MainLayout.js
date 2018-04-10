import React, { Component } from 'react'
import styled from 'styled-components'
import { BaseTheme } from '../../theme/BaseTheme';

export class MainLayout extends Component {
    render() {
        return (
            <Background className="MainLayout">
                {this.props.children}
            </Background>
        )
    }
}

const Background = styled.section`
    background-color: ${BaseTheme.backgroundColor}
`;