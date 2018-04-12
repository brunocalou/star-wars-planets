import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme/Colors';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import { Footer } from '../../components/Footer/Footer';
import { PlanetRepository } from '../../repository/PlanetRepository/PlanetRepository';
import EasyTransition from 'react-easy-transition';
import { BB8Loading } from '../../components/BB8Loading/BB8Loading';
import { Centered } from '../../components/Centered/Centered';
import { BaseTheme } from '../../theme/BaseTheme';

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
            <EasyTransition
                path={this.props.history.location.pathname}
                initialStyle={{opacity: 0, height: '100vh'}}
                transition="opacity 0.3s ease-in"
                finalStyle={{opacity: 1, height: '100vh'}}
            >
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
                                    ?   <PlanetCard
                                            key={this.state.planet.id}
                                            planet={this.state.planet}
                                            onNext={() => this._getRandomPlanet()} />
                                    :   undefined
                                    }
                        </DismissibleAnimation>
                        <LoadingContainer>
                            <BB8Loading />
                            <h3 style={{textAlign: 'center'}}>Searching</h3>
                        </LoadingContainer>
                    </FlexItem>

                    <FlexItem>
                        <Footer />
                    </FlexItem>
                </Flex>
            </EasyTransition>
        );
    }
}

const LoadingContainer = styled(Centered)`
    /* A negative z-index keeps the item bellow the other on iOS.*/
    /* When it was 0, it worked on the desktop, but not on iOS */
    z-index: -1;
`;

const DismissibleAnimation = styled.div`
     transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
     transform: ${props => props.dismissed ? 'translate3d(-400px, 0, 0)' : 'translate3d(0, 0, 0)'}; // Keep the translate3d so that z-index still works
     opacity: ${props => props.dismissed ? '0' : '1'};
     z-index: 1;
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
    width: ${props => props.fullWidth ? '100%' : 'initial'};
    transform: translate3d(0, 0, 0);
`;