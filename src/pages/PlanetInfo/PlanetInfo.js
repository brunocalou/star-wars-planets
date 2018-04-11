import React, { Component } from 'react';
import styled from 'styled-components'
import { Colors } from '../../theme/Colors';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import { Planet } from '../../model/Planet';
import { Footer } from '../../components/Footer/Footer';

const planet = new Planet({
    name: 'Yavin IV',
    population: 2000,
    climate: ['temperate', 'tropical'],
    terrain: ['jungle', 'rainforests'],
    films: ['A New Hope'],
})

export class PlanetInfo extends Component {
    render() {
        return (
            <Flex>
                <FlexItem>
                    <Navbar>
                        <NavbarTitle>Star Wars</NavbarTitle>
                        <NavbarTitle>Planets</NavbarTitle>
                    </Navbar>
                </FlexItem>

                <FlexItem>
                    <PlanetCard planet={planet}/>
                </FlexItem>

                <FlexItem>
                    <Footer />
                </FlexItem>
            </Flex>
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
    color: ${Colors.yellow};
    font-family: 'StarJedi';
`;

const Flex = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const FlexItem = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    width: ${props => props.fullWidth ? '100%' : 'initial'}
`;