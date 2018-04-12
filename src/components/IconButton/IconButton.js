import React from 'react'
import styled from 'styled-components';
import { Media } from '../../util/Media';

export function IconButton(props) {
    return (
        <Image src={props.src} alt={props.alt}/>
    )
}

const Image = styled.img`
    width: 32px;
    height: 32px;
    ${Media.phone`width: 24px;`};
    ${Media.phone`height: 24px;`};
    cursor: pointer;
`;