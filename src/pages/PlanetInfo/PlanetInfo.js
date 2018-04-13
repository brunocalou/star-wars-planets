import React, { Component } from 'react';
import styled from 'styled-components';

import { PlanetCard } from '../../components/PlanetCard/PlanetCard';
import { PlanetRepository } from '../../repository/PlanetRepository/PlanetRepository';
import { BB8Loading } from '../../components/BB8Loading/BB8Loading';
import { Centered } from '../../components/Centered/Centered';
import { Navbar } from '../../components/Navbar/Navbar';
import { NavbarTitle } from '../../components/Navbar/NavbarTitle/NavbarTitle';
import { FlexItem } from '../../components/Flex/FlexItem/FlexItem';
import { WireButton } from '../../components/WireButton/WireButton';
import { Message } from '../../components/Message/Message';
import { Image } from '../../components/Image/Image';
import { PageScaffold } from '../../components/PageScaffold/PageScaffold';
import PlanetNofFound from './images/PlanetNotFound.svg';

export class PlanetInfo extends Component {
    constructor() {
        super();
        this.state = {
            planet: undefined,
            fetchingPlanet: true,
            fetchingError: false,
        };
    }

    _getRandomPlanet() {
        this.setState({ fetchingPlanet: true })
        this.setState({ fetchingError: false })

        if (PlanetRepository.isLoaded()) {
            if (PlanetRepository.hasRandomPlanet()) {
                PlanetRepository.getRandomPlanet()
                    .then(planet => {
                        return planet;
                    })
                    .then(planet => {
                        if (planet.isValid) {
                            this.setState({ planet })
                            this.setState({ fetchingPlanet: false })
                            this.setState({ fetchingError: false })
                        } else {
                            // console.log(`${planet.name} is not valid, fetching another`)
                            this._getRandomPlanet()
                        }
                    })
                    .catch(error => {
                        // console.log(error)
                        this.setState({ fetchingError: true })
                    })
            } else {
                this.props.history.push('/restart')
            }
        } else {
            PlanetRepository.reload()
            .then(() => this._getRandomPlanet())
            .catch((error) => {
                // console.log(error)
                this.setState({ fetchingError: true })
            });
        }
    }

    componentDidMount() {
        this._getRandomPlanet();
    }

    render() {
        return (
            <PageScaffold
                pathname={this.props.history.location.pathname}
                navbar={
                    <Navbar>
                        <NavbarTitle>Star Wars</NavbarTitle>
                        <NavbarTitle>Planets</NavbarTitle>
                    </Navbar>
                }
                message={
                    this.state.fetchingError
                        ?   <Message>Could not find a planet</Message>
                        :   null
                }
                button={
                    this.state.fetchingError
                        ?   <WireButton onClick={() => this._getRandomPlanet()}>Try Again</WireButton>
                        : null
                }>

                {/*
                    Toggle the display instead of removing it from the DOM.
                    This prevents image load failure on mobile devices, resulting on a BB8 without a head
                */}

                <Image src={PlanetNofFound} alt="Planet not found" style={{display: this.state.fetchingError ? 'initial' : 'none'}}/>

                <FlexItem style={{display: this.state.fetchingError ? 'none' : 'initial'}}>
                    <DismissibleAnimation dismissed={this.state.fetchingPlanet}>
                    {this.state.planet
                        ?   <PlanetCard
                                key={this.state.planet.id}
                                planet={this.state.planet}
                                onNext={() => this._getRandomPlanet()} />
                        :   null
                        }
                    </DismissibleAnimation>
                    <LoadingContainer>
                        <BB8Loading />
                        <Message>Searching</Message>
                    </LoadingContainer>
                </FlexItem>

            </PageScaffold>
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