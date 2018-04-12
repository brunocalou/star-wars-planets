import React, { Component } from 'react'

import { Navbar } from '../../components/Navbar/Navbar';
import { NavbarTitle } from '../../components/Navbar/NavbarTitle/NavbarTitle';
import { Image } from '../../components/Image/Image';
import { Message } from '../../components/Message/Message';
import { WireButton } from '../../components/WireButton/WireButton';
import { PageScaffold } from '../../components/PageScaffold/PageScaffold';
import { PlanetRepository } from '../../repository/PlanetRepository/PlanetRepository';
import PlanetMissing from './images/PlanetMissing.svg';

export class NoPlanetsLeft extends Component {
    reload() {
        PlanetRepository.reload()
            .then(() => this.props.history.push('/'));
    }

    render () {
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
                    <Message>No planets left</Message>
                }
                button={
                    <WireButton onClick={() => this.reload()}>Restart</WireButton>
                }
                >
                <Image src={PlanetMissing} alt="Planet missing" width="210"/>
            </PageScaffold>
        );
    }
};