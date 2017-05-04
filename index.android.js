/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry, View } from 'react-native';
import React, { Component } from 'react';
import App from './src/app';

export default class taxfix extends Component {
    render() {
        return <App />;
    }
}

AppRegistry.registerComponent('taxfix', () => taxfix);
