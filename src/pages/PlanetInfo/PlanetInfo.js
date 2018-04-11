import React, { Component } from 'react';
import styled from 'styled-components'
import { Colors } from '../../theme/Colors';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import { Planet } from '../../model/Planet/Planet';
import { Footer } from '../../components/Footer/Footer';
import { PlanetRepository } from '../../repository/PlanetRepository/PlanetRepository';

export class PlanetInfo extends Component {
    constructor() {
        super();
        this.state = {
            planet: undefined
        };
    }

    _reloadIfNeeded() {
        if (!PlanetRepository.isLoaded()) {
            return PlanetRepository.reload()
                .then(() => this._getRandomPlanet())
                .catch(error => console.log(error));
        }
        return new Promise();
    }

    _getRandomPlanet() {
        console.log('_getRandomPlanet')
        this.setState({ planet: undefined })

        if (PlanetRepository.hasRandomPlanet()) {
            PlanetRepository.getRandomPlanet()
            .then(planet => {
                console.log(planet);
                return planet;
            })
            .then(planet => {
                // this.setState({ planet })
                if (planet.isValid) this.setState({ planet })
                else {
                    console.log(`${planet.name} is not valid, fetching another`)
                    this._getRandomPlanet()
                }
            })
            .catch(error => console.log(error))
        } else {
            console.error('No planets left!')
        }
    }

    logNext() {
        console.log('next')
    }

    componentDidMount() {
        this._reloadIfNeeded().then(() => this._getRandomPlanet());
    }

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
                    {this.state.planet ? <PlanetCard planet={this.state.planet} onNext={() => this._getRandomPlanet()}/> : <h4>Loading...</h4>}
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