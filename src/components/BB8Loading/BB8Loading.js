import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { Centered } from '../Centered/Centered';
import BB8Body from './images/Body-BB8.svg';
import BB8Head from './images/Head-BB8.svg';
import BB8Ground from './images/Ground-BB8.svg';

export class BB8Loading extends Component {
    render () {
        return (
            <Sized>
                <Centered>
                    <Ground src={BB8Ground} />
                </Centered>
                <Centered>
                    <Rotate>
                        <Body src={BB8Body} />
                    </Rotate>
                </Centered>
                <HeadPosition>
                    <Jump>
                        <Head src={BB8Head} />
                    </Jump>
                </HeadPosition>
            </Sized>
        );
    }
}

const Sized = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
`;

const HeadPosition = styled(Centered)`
    top: 10%;
    transform: translate3d(-50%, 0%, 0);
`;

const Head = styled.img`
`;

const Body = styled.img`
`;

const Ground = styled.img`
`;

const jumpAnimation = keyframes`
    0% {
        transform: transform(0, 0, 0);
    }

    40% {
        transform: transform(0, 0, 0);
    }

    50% {
        transform: translate3d(0, -20%, 0);
    }

    60% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(0, 0, 0);
    }
`;

const Jump = styled.div`
    animation: ${jumpAnimation} .5s ease-in-out infinite;
`;

const rotate360Animation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  animation: ${rotate360Animation} 1s linear infinite reverse;
`;