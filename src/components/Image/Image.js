import styled from 'styled-components';
import { Media } from '../../util/Media';
import { Constants } from '../PlanetCard/Constants';

export const Image = styled.img`
    width: ${props => props.width || Constants.cardWidth};
    ${Media.phone`width: ${props => props.width || Constants.cardPhoneWidth};`};
`;