import React, { Component } from 'react';
import styled from 'styled-components';
import EasyTransition from 'react-easy-transition';
import PlanetNofFound from '../../assets/img/PlanetNotFound.svg';
import { Colors } from '../../theme/Colors';
import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import { Footer } from '../../components/Footer/Footer';
import { PlanetRepository } from '../../repository/PlanetRepository/PlanetRepository';
import { BB8Loading } from '../../components/BB8Loading/BB8Loading';
import { Centered } from '../../components/Centered/Centered';
import { BaseTheme } from '../../theme/BaseTheme';
import { Constants } from '../../components/PlanetCard/Constants';
import { Media, Sizes } from '../../util/Media';
import { Navbar } from '../../components/Navbar/Navbar';
import { NavbarTitle } from '../../components/Navbar/NavbarTitle/NavbarTitle';
import { Flex } from '../../components/Flex/Flex';
import { FlexItem } from '../../components/Flex/FlexItem/FlexItem';
import { WireButton } from '../../components/WireButton/WireButton';
import { Message } from '../../components/Message/Message';
import { Image } from '../../components/Image/Image';

export class PlanetInfo extends Component {
    constructor() {
        super();
        this.state = {
            planet: undefined,
            fetchingPlanet: true,
            fetchingError: false
        };
    }

    _getRandomPlanet() {
        this.setState({ fetchingPlanet: true })
        this.setState({ fetchingError: false })

        if (PlanetRepository.isLoaded()) {
            console.log('Planet repository says it is loaded')
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
                            this.setState({ fetchingError: false })
                        } else {
                            console.log(`${planet.name} is not valid, fetching another`)
                            this._getRandomPlanet()
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.setState({ fetchingError: true })
                    })
            } else {
                console.error('No planets left!')
            }
        } else {
            PlanetRepository.reload()
            .then(() => this._getRandomPlanet())
            .catch((error) => {
                console.log(error)
                this.setState({ fetchingError: true })
            });
        }
    }

    componentDidMount() {
        this._getRandomPlanet();
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

                    <FlexItem style={{display: this.state.fetchingError ? 'initial' : 'none'}}>
                        <Flex>
                            <FlexItem>
                            <Image src={PlanetNofFound}/>
                            </FlexItem>
                            <FlexItem>
                                <Message style={{textAlign: 'center'}}>Could not find a planet</Message>
                            </FlexItem>
                            <FlexItem>
                                <WireButton onClick={() => this._getRandomPlanet()}>Try Again</WireButton>
                            </FlexItem>
                        </Flex>
                    </FlexItem>

                    {/*
                        Toggle the display instead of removing it from the DOM.
                        This prevents image load failure on mobile devices, resulting on a BB8 without a head
                    */}
                    <FlexItem style={{display: this.state.fetchingError ? 'none' : 'initial'}}>
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
                            <Message>Searching</Message>
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