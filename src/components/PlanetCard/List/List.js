import React, { Component } from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types';
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

List.propTypes = {
    // items: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    //     console.log(propValue, key, componentName, location, propFullName)
    //     if (key !== 'name' || key !== 'gradient') {
    //         return new Error(
    //             `Invalid prop ${key} supplied to ${componentName}`
    //         )
    //     }
    // })
}