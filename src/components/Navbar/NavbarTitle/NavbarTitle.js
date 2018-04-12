import styled from 'styled-components';
import { Colors } from '../../../theme/Colors';

export const NavbarTitle = styled.h3`
    font-size: ${props => props.big ? '4.5rem' : '1.4rem'};
    margin: 0px;
    color: ${Colors.yellow};
    font-family: 'StarJedi';
`;