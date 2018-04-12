import React, { Component } from 'react';
import { StarWarsIntro } from './StarWarsIntro/StarWarsIntro';
import { IconButton } from '../../components/IconButton/IconButton';
import styled from 'styled-components';
import backIcon from '../../assets/img/arrow-left.svg'
import EasyTransition from 'react-easy-transition'

export class ProjectInfo extends Component {
    render() {
        return (
            <EasyTransition
                path={this.props.history.location.pathname}
                initialStyle={{opacity: 0, height: '100vh'}}
                transition="opacity 0.3s ease-in"
                finalStyle={{opacity: 1, height: '100vh'}}
            >
                <StarWarsIntro>
                    <Back onClick={this.props.history.goBack}>
                        <IconButton src={backIcon} alt="back" />
                    </Back>
                </StarWarsIntro>
            </EasyTransition>
        );
    }
}

const Back = styled.a`
    position: absolute;
    left: 1rem;
    top: 1rem;
`;