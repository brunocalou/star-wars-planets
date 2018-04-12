import styled from 'styled-components';

export const Message = styled.h3`
    text-align: center;
    padding: 1rem;
    font-size: ${props => props.big ? '1.6rem' : '1.2rem'};
`;