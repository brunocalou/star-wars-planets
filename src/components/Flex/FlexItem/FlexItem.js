import styled from 'styled-components';

export const FlexItem = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    width: ${props => props.fullWidth ? '100%' : 'initial'};
    transform: translate3d(0, 0, 0);
`;