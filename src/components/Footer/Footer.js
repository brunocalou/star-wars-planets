import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import githubLogo from '../../assets/img/github-circle.svg'
import informationLogo from '../../assets/img/information-outline.svg'
import { Constants } from '../PlanetCard/Constants';
import { Media } from '../../util/Media';

export class Footer extends Component {
    render() {
        return (
            <Flex>
                <Link to="/info">
                    <Image src={informationLogo} alt="information"/>
                </Link>
                <a href="https://github.com/brunocalou/star-wars-planets" target="_blank" rel="noopener noreferrer">
                    <Image src={githubLogo} alt="github"/>
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

const Image = styled.img`
    width: 32px;
    height: 32px;
    ${Media.phone`width: 24px;`};
    ${Media.phone`height: 24px;`};
`;