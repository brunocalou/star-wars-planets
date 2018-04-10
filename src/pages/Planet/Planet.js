import React, { Component } from 'react';
import styled from 'styled-components'
import { BaseTheme } from '../../theme/BaseTheme';

export class Planet extends Component {
    render() {
        return (
            <section>
                <Navbar>
                    <NavbarTitle>Star Wars</NavbarTitle>
                    <NavbarTitle>Planets</NavbarTitle>
                </Navbar>
            </section>
        );
    }
}

const Navbar = styled.nav`
    text-align: center;
    padding: 1.5rem;
`;

const NavbarTitle = styled.h3`
    font-size: 1.4rem;
    margin: 0px;
    color: ${BaseTheme.titleColor};
    font-family: 'StarJedi';
    font-weight: 100;
`;