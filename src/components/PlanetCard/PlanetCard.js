import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { BaseTheme } from '../../theme/BaseTheme';
import { Colors } from '../../theme/Colors';
import { Planet } from '../../model/Planet/Planet';
import { Media } from '../../util/Media';
import { formatNumberOrBypass } from '../../util/formatNumber';
import { List } from './List/List';
import { Constants } from './Constants';
import { transformPlanet } from './util/transformPlanet';

export class PlanetCard extends Component {
    constructor(props) {
        super(props);

        const transformedPlanet = transformPlanet(props.planet);

        this.state = {
            transformedPlanet,
            numberOfFilms: transformedPlanet.films.length
        }
    }

    render() {
        return (
            <Material>
                <CardTitle>{this.state.transformedPlanet.name}</CardTitle>

                <CardSubtitle>Population</CardSubtitle>
                <CardPopulation>{formatNumberOrBypass(this.state.transformedPlanet.population)}</CardPopulation>

                <CardSubtitle>Climate</CardSubtitle>
                <List items={this.state.transformedPlanet.climate} />

                <CardSubtitle>Terrain</CardSubtitle>
                <List items={this.state.transformedPlanet.terrain} />

                <CardDivider></CardDivider>

                <CardSubtitle>Featured in {this.state.numberOfFilms} Film{this.state.numberOfFilms === 1 ? '' : 's'}</CardSubtitle>

                <CardDivider></CardDivider>

                <CardActionContainer>
                    <CardAction onClick={this.props.onNext}>Next</CardAction>
                </CardActionContainer>
            </Material>
        );
    }
}

PlanetCard.propTypes = {
    planet: PropTypes.instanceOf(Planet).isRequired,
    onNext: PropTypes.func
}

const Material = styled.div`
    background-color: ${BaseTheme.cardColor};
    width: ${Constants.cardWidth};
    ${Media.phone`width: ${Constants.cardPhoneWidth};`};
`;

const CardTitle = styled.h3`
    font-size: 1.3rem;
    color: ${Colors.gray2};
    padding: ${Constants.contentPadding};
    margin: 0;
`;

const CardSubtitle = styled.h4`
    font-size: 0.8rem;
    margin: 0;
    padding-left: ${Constants.contentPadding};
    padding-right: ${Constants.contentPadding};
    padding-bottom: ${Constants.subtitlePadding};
    padding-top: ${Constants.subtitlePadding};
`;

const CardPopulation = styled.h1`
    font-size: 6rem;
    text-align: center;
    margin: 0;
`;

const CardDivider = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${Colors.gray4};
    margin-top: .5rem;
    margin-bottom: .5rem;
`;

const CardActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CardAction = styled.a`
    padding: ${Constants.contentPadding};
    font-size: 1rem;
    text-transform: uppercase;
    text-align: right;
    margin: 0;
    cursor: pointer;
    display: inline-block;
`;
