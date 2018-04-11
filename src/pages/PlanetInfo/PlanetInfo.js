import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme/Colors';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import { Footer } from '../../components/Footer/Footer';
import { PlanetRepository } from '../../repository/PlanetRepository/PlanetRepository';
export class PlanetInfo extends Component {
    constructor() {
        super();
        this.state = {
            planet: undefined,
            fetchingPlanet: true,
        };
    }

    _reloadIfNeeded() {
        if (!PlanetRepository.isLoaded()) {
            return PlanetRepository.reload()
                .catch(error => console.log(error));
        }
        return new Promise((resolve, reject) => resolve());
    }

    _getRandomPlanet() {
        this.setState({ fetchingPlanet: true })

        if (PlanetRepository.hasRandomPlanet()) {
            PlanetRepository.getRandomPlanet()
                .then(planet => {
                    console.log(planet);
                    return planet;
                })
                .then(planet => {
                    if (planet.isValid) {
                        this.setState({ planet })
                        this.setState({ fetchingPlanet: false })
                    } else {
                        console.log(`${planet.name} is not valid, fetching another`)
                        this._getRandomPlanet()
                    }
                })
                .catch(error => console.log(error))
        } else {
            console.error('No planets left!')
        }
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
                    <DismissibleAnimation dismissed={this.state.fetchingPlanet}>
                    {this.state.planet
                                ?<PlanetCard
                                    key={this.state.planet.id}
                                    planet={this.state.planet}
                                    onNext={() => this._getRandomPlanet()} />
                                    : undefined
                                }
                    </DismissibleAnimation>
                </FlexItem>

                <FlexItem>
                    <Footer />
                </FlexItem>
            </Flex>
        );
    }
}

const DismissibleAnimation = styled.div`
     transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
     transform: ${props => props.dismissed ? 'translate3d(-400px, 0, 0)' : 'initial'};
     opacity: ${props => props.dismissed ? '0' : '1'};
`;

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