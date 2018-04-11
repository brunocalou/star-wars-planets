import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Gradient } from '../../../../model/Gradient';

export class ListItem extends Component {
    render() {
        return (
            <Item>
                <Bullet color={this.props.color} gradient={this.props.gradient}/>
                <Name>{this.props.name}</Name>
            </Item>
        );
    }
}

ListItem.propTypes = {
    name: PropTypes.string,
    gradient: PropTypes.instanceOf(Gradient),
    color: PropTypes.string
}

const BulletSize = '20px';

const Bullet = styled.div`
    width: ${BulletSize};
    height: ${BulletSize};
    margin-right: 1rem;
    background: ${props => props.gradient ? `linear-gradient(${props.gradient.start}, ${props.gradient.end})` : 'initial'};
    background-color: ${props => props.color || 'black'};
    border-radius: 50%;
`;

const Name = styled.div`
    font-size: 1.1rem;
    text-transform: capitalize;
`;

const Item = styled.li`
    display: flex;
    list-style-type: none;
    margin-top: .7rem;
    margin-bottom: .7rem;
`;