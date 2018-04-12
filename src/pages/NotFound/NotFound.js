import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../../components/Navbar/Navbar';
import { NavbarTitle } from '../../components/Navbar/NavbarTitle/NavbarTitle';
import { Image } from '../../components/Image/Image';
import { Message } from '../../components/Message/Message';
import { WireButton } from '../../components/WireButton/WireButton';
import { PageScaffold } from '../../components/PageScaffold/PageScaffold';
import R2D2 from './images/R2D2.svg';

export class NotFound extends Component {
    render () {
        return (
            <PageScaffold
                pathname={this.props.history.location.pathname}
                navbar={
                    <Navbar>
                        <NavbarTitle big>404</NavbarTitle>
                    </Navbar>
                }
                message={
                    <Message big>This is not the page <br/> you are looking for</Message>
                }
                button={
                    <Link to="/">
                        <WireButton>Home</WireButton>
                    </Link>
                }
                >
                <Image src={R2D2} alt="Page not found" width="210"/>
            </PageScaffold>
        );
    }
};