import React, { Component } from 'react'
import EasyTransition from 'react-easy-transition';
import { Link } from 'react-router-dom'

import { Flex } from '../../components/Flex/Flex';
import { FlexItem } from '../../components/Flex/FlexItem/FlexItem';
import { Navbar } from '../../components/Navbar/Navbar';
import { NavbarTitle } from '../../components/Navbar/NavbarTitle/NavbarTitle';
import { Image } from '../../components/Image/Image';
import { Message } from '../../components/Message/Message';
import { WireButton } from '../../components/WireButton/WireButton';
import R2D2 from '../../assets/img/R2D2.svg';

export class NotFound extends Component {
    render () {
        return (
            <EasyTransition
                path={this.props.history.location.pathname}
                initialStyle={{opacity: 0, height: '100vh'}}
                transition="opacity 0.3s ease-in"
                finalStyle={{opacity: 1, height: '100vh'}}>
                <Flex>
                    <FlexItem>
                        <Navbar>
                            <NavbarTitle big>404</NavbarTitle>
                        </Navbar>
                    </FlexItem>
                    <FlexItem>
                        <Image src={R2D2} alt="Page not found" width="210"/>
                    </FlexItem>
                    <FlexItem>
                        <Message big>This is not the page <br/> you are looking for</Message>
                    </FlexItem>
                    <FlexItem>
                        <Link to="/">
                            <WireButton>Home</WireButton>
                        </Link>
                    </FlexItem>
                </Flex>
            </EasyTransition>
        );
    }
};