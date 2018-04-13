import React, { Component } from 'react'
import styled from 'styled-components'
import { ListItem } from './ListItem/ListItem';
import { Constants } from '../Constants';

const ListStyle = styled.ul`
    padding-left: ${Constants.contentPadding};
    padding-right: ${Constants.contentPadding};
`;

export class List extends Component {
    render() {
        return (
            <ListStyle>
                {this.props.items.map((item) =>
                    <ListItem name={item.name} key={item.name} color={item.color} gradient={item.gradient}/>
                )}
            </ListStyle>
        );
    }
}
