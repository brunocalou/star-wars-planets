import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { Constants } from '../PlanetCard/Constants';
import { Media } from '../../util/Media';
import { IconButton } from '../IconButton/IconButton';
import githubLogo from './images/github-circle.svg';
import informationLogo from './images/information-outline.svg';

export class Footer extends Component {
    render() {
        return (
            <Flex>
                <Link to="/info">
                    <IconButton src={informationLogo} alt="information"/>
                </Link>
                <a href="https://github.com/brunocalou/star-wars-planets" target="_blank" rel="noopener noreferrer">
                    <IconButton src={githubLogo} alt="github"/>
                </a>
            </Flex>
        );
    }
}

const Flex = styled.footer`
    display: flex;
    flex-direction: horizontal;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-top: ${Constants.contentPadding};
    padding-bottom: ${Constants.contentPadding};
    width: ${Constants.cardWidth};
    ${Media.phone`width: ${Constants.cardPhoneWidth};`};
`;