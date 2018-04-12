import styled from 'styled-components';
import { BaseTheme } from '../../theme/BaseTheme';
import { Colors } from '../../theme/Colors';
import { Sizes } from '../../util/Media';

export const WireButton = styled.div`
    display: inline-block;
    margin: 1em;
    padding: .7em;
    border: 1px solid ${BaseTheme.textColor};
    border-radius: 50px;
    background-color: transparent;
    box-shadow: none;
    color: ${BaseTheme.textColor};
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;

    transition: border-color .2s, color .2s;

    @media (min-width: ${Sizes.desktop + 'px'}) {
        &:hover {
            border-color: ${Colors.gray5};
            color: ${Colors.gray5};
        };
    }
`;