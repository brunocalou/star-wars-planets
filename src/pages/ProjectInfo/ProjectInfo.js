import React, { Component } from 'react';
import { StarWarsIntro } from './StarWarsIntro/StarWarsIntro';
import { IconButton } from '../../components/IconButton/IconButton';
import styled from 'styled-components';
import backIcon from '../../assets/img/arrow-left.svg'

export class ProjectInfo extends Component {
    render() {
        return (
            <StarWarsIntro>
                <Back onClick={this.props.history.goBack}>
                    <IconButton src={backIcon} alt="back" />
                </Back>
            </StarWarsIntro>
        );
    }
}

const Back = styled.a`
    position: absolute;
    left: 1rem;
    top: 1rem;
`;