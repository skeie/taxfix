/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry, View } from 'react-native';
import React, { Component } from 'react';
import Routes from './src/components/router/routes';

export default class taxfix extends Component {
    render() {
        return <Routes />;
    }
}

AppRegistry.registerComponent('taxfix', () => taxfix);
