import React, { Component } from 'react';
import styled from 'styled-components';
import posed from "react-pose";
import { Colors } from '../../theme/Colors';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import { Footer } from '../../components/Footer/Footer';
import { PlanetRepository } from '../../repository/PlanetRepository/PlanetRepository';

export class PlanetInfo extends Component {
    constructor() {
        super();
        this.state = {
            planet: undefined,
            dismissingCard: false,
        };
    }

    _reloadIfNeeded() {
        if (!PlanetRepository.isLoaded()) {
            return PlanetRepository.reload()
                .catch(error => console.log(error));
        }
        return new Promise();
    }

    _getRandomPlanet() {
        this.setState({ dismissingCard: true })

        const context = this

        if (PlanetRepository.hasRandomPlanet()) {
            PlanetRepository.getRandomPlanet()
                .then(planet => {
                    console.log(planet);
                    return planet;
                })
                .then(planet => {
                    if (planet.isValid) {
                        this.setState({ planet })
                        this.setState({ dismissingCard: false })
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

    logNext() {
        console.log('next')
    }

    componentDidMount() {
        this._reloadIfNeeded().then(() => this._getRandomPlanet());
    }

    onAnimationChange(value) {
        console.log('On animation change')
        console.log(value)
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
                    {this.state.planet
                        ?   <AnimatedPlanetCard
                                pose={this.state.dismissingCard ? 'leaving' : 'idle'}
                                onChange={this.onAnimationChange}>
                                <PlanetCard
                                    key={this.state.planet.id}
                                    planet={this.state.planet}
                                    onNext={() => this._getRandomPlanet()} />
                            </AnimatedPlanetCard>
                        : <h4>Loading...</h4>
                    }
                </FlexItem>

                <FlexItem>
                    <Footer />
                </FlexItem>
            </Flex>
        );
    }
}

const AnimatedPlanetCard = posed.div({
    leaving: {
        x: '-100%',
        opacity: 0
    },
    idle: {
        x: '0%',
        opacity: 1
    }
});

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