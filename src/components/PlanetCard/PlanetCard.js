import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { BaseTheme } from '../../theme/BaseTheme';
import { Colors } from '../../theme/Colors';
import { Planet } from '../../model/Planet';

export class PlanetCard extends Component {
    render() {
        return (
            <Material>
                <CardTitle>{this.props.planet.name}</CardTitle>
                {this.props.children}
            </Material>
        );
    }
}

PlanetCard.defaultProps = {
    planet: new Planet({
        name: 'Planet Name',
    })
}

PlanetCard.propTypes = {
    planet: PropTypes.instanceOf(Planet).isRequired,
    next: PropTypes.string
}

const Material = styled.div`
    background-color: ${BaseTheme.cardColor};
    width: 100%;
`;

const CardTitle = styled.h3`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${Colors.gray2};
`;