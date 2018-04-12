import React, { Component } from 'react'
import PropTypes from 'prop-types';
import EasyTransition from 'react-easy-transition';
import { Flex } from '../Flex/Flex';
import { FlexItem } from '../Flex/FlexItem/FlexItem';
import { Footer } from '../Footer/Footer';

export class PageScaffold extends Component {
    render() {
        return (
            <EasyTransition
                path={this.props.pathname}
                initialStyle={{opacity: 0, height: '100vh'}}
                transition="opacity 0.3s ease-in"
                finalStyle={{opacity: 1, height: '100vh'}}>
                <Flex>
                    <FlexItem>
                        {this.props.navbar}
                    </FlexItem>

                    <FlexItem>
                        <Flex>
                            <FlexItem>
                                {this.props.children}
                            </FlexItem>
                            <FlexItem>
                                {this.props.message}
                            </FlexItem>
                            <FlexItem>
                                {this.props.button}
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                    <FlexItem>
                        <Footer/>
                    </FlexItem>
                </Flex>
            </EasyTransition>
        );
    }
};

PageScaffold.propTypes = {
    // navbar: PropTypes.instanceOf(Component),
    // message: PropTypes.instanceOf(Component),
    // button: PropTypes.instanceOf(Component),
    pathname: PropTypes.string.isRequired
}