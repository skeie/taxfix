import React, { Component } from 'react';
import { View } from 'react-native';
import CurrencyElement from '../currencyElement/currencyElement';
import Keyboard from '../keyboard/keyboard';
import CurrencyList from '../currencyElement/currentcyList';
class CurrencyScreen extends Component {
    static defaultProps = {
        currencies: {
            rates: [],
        },
    };
    render() {
        return <CurrencyList currencies={this.props.currencies} />;
    }
}

export default CurrencyScreen;
