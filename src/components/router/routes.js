// const data = {
//     time: '2017-05-04',
//     base: 'EUR',
//     rates: [
//         { currency: 'USD', rate: '1.0927' },
//         { currency: 'JPY', rate: '123.31' },
//         { currency: 'BGN', rate: '1.9558' },
//         { currency: 'CZK', rate: '26.767' },
//         { currency: 'DKK', rate: '7.4365' },
//         { currency: 'GBP', rate: '0.84765' },
//         { currency: 'HUF', rate: '312.05' },
//         { currency: 'PLN', rate: '4.2107' },
//         { currency: 'RON', rate: '4.5460' },
//         { currency: 'SEK', rate: '9.6438' },
//         { currency: 'CHF', rate: '1.0843' },
//         { currency: 'NOK', rate: '9.4803' },
//         { currency: 'HRK', rate: '7.4490' },
//         { currency: 'RUB', rate: '63.3428' },
//         { currency: 'TRY', rate: '3.8910' },
//         { currency: 'AUD', rate: '1.4773' },
//         { currency: 'BRL', rate: '3.4822' },
//         { currency: 'CAD', rate: '1.5010' },
//         { currency: 'CNY', rate: '7.5350' },
//         { currency: 'HKD', rate: '8.5040' },
//         { currency: 'IDR', rate: '14562.96' },
//         { currency: 'ILS', rate: '3.9546' },
//         { currency: 'INR', rate: '70.1360' },
//         { currency: 'KRW', rate: '1241.17' },
//         { currency: 'MXN', rate: '20.7386' },
//         { currency: 'MYR', rate: '4.7287' },
//         { currency: 'NZD', rate: '1.5925' },
//         { currency: 'PHP', rate: '54.584' },
//         { currency: 'SGD', rate: '1.5293' },
//         { currency: 'THB', rate: '37.840' },
//         { currency: 'ZAR', rate: '14.7991' },
//     ],
// };

import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { get as getRates } from '../../utils/fetch';
import CurrencyList from '../currencyElement/currencyList';
export default class Router extends React.Component {
    state = {
        currencies: [],
    };
    componentDidMount() {
        // StatusBar.setHidden(true);
        this.fetchRates();
    }

    fetchRates = async () => {
        const currencies = await getRates();
        this.setState({
            currencies,
        });
    };
    render() {
        if (this.state.currencies.length <= 0)
            return <ActivityIndicator style={{ flex: 1 }} />;
        return <CurrencyList {...this.state} />;
    }
}
