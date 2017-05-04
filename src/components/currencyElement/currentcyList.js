import React, { Component } from 'react';
import { ScrollView, View, Keyboard, TextInput, Text } from 'react-native';
import CurrentCurrencyRate from './currencyElement';
import Search from './search';

class CurrencyList extends Component {
    state = {
        currentSearchString: '',
        currencies: this.props.currencies.rates,
    };

    currencyContainsCurrencyString = ({ currency }, currentSearchString) => {
        return (
            currency.toLowerCase().indexOf(currentSearchString.toLowerCase()) >=
            0
        );
    };

    calculateNewCurrencyArray = (currencies, currentSearchString) => {
        // if user has written anything in the search field, filter on that
        if (Boolean(currentSearchString)) {
            return currencies.filter(currency =>
                this.currencyContainsCurrencyString(
                    currency,
                    currentSearchString,
                ),
            );
        } else {
            // if user clears the input field, return initial array
            return this.props.currencies;
        }
    };
    onSearchStringChange = currentSearchString => {
        this.setState(({ currencies }) => ({
            currentSearchString,
            currencies: this.calculateNewCurrencyArray(
                currencies,
                currentSearchString,
            ),
        }));
    };
    render() {
        const { currencies } = this.state;
        console.log('sap', this.props.currencies);
        debugger;

        return (
            <View style={{ flex: 1, marginTop: 20 }}>
                <Text
                    style={{
                        textAlign: 'center',
                        paddingVertical: 20,
                        fontSize: 20,
                        fontFamily: 'DamascusBold',
                        color: 'black',
                    }}>
                    Rates for {this.props.currencies.time}
                </Text>
                <Search
                    onChangeText={this.onSearchStringChange}
                    value={this.state.currentSearchString}
                />
                <ScrollView
                    style={{ flex: 1 }}
                    keyboardShouldPersistTaps="never"
                    onScroll={Keyboard.dismiss}>
                    {currencies.map(({ rate, currency }, index) => (
                        <CurrentCurrencyRate
                            isPinkColor={index % 2 === 0}
                            rate={rate}
                            currency={currency}
                            key={currency}
                        />
                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default CurrencyList;
