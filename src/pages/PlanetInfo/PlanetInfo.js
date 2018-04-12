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
import PlanetNofFound from '../../assets/img/PlanetNotFound.svg';
import { Constants } from '../../components/PlanetCard/Constants';
import { Media, Sizes } from '../../util/Media';

export class PlanetInfo extends Component {
    constructor() {
        super();
        this.state = {
            planet: undefined,
            fetchingPlanet: true,
            fetchingError: false
        };
    }

    // _reloadIfNeeded() {
    //     if (!PlanetRepository.isLoaded()) {
    //         return PlanetRepository.reload()
    //             .catch(error => console.log(error));
    //     }
    //     return new Promise((resolve, reject) => resolve());
    // }

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

const Image = styled.img`
    width: ${Constants.cardWidth};
    ${Media.phone`width: ${Constants.cardPhoneWidth};`};
`;

const Message = styled.h3`
    text-align: center;
    padding: 1rem;
`;

const WireButton = styled.div`
    display: inline-block;
    margin: 1em;
    padding: .7em;
    border: 1px solid ${BaseTheme.textColor};
    border-radius: 50px;
    background-color: transparent;
    box-shadow: none;
    color: ${BaseTheme.textColor};
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;

    transition: border-color .2s, color .2s;

    @media (min-width: ${Sizes.desktop + 'px'}) {
        &:hover {
            border-color: ${Colors.gray5};
            color: ${Colors.gray5};
        };
    }
`;

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