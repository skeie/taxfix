import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Keyboard,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CurrentCurrencyRate from './currencyElement';
import Search from './search';

const Topbar = ({ time, refreshRates }) => (
    <View style={styles.topbarContainer}>
        <Text style={styles.text}>
            Rates for {time}
        </Text>
    </View>
);

class CurrencyList extends Component {
    static defaultProps = {
        currencies: {
            data: [],
        },
    };
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
            return this.props.currencies.rates;
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
        return (
            <View style={[styles.container, styles.paddingToStatusBar]}>
                <Topbar
                    time={this.props.currencies.time}
                    refreshRates={this.props.fetchRates}
                />
                <Search
                    onChangeText={this.onSearchStringChange}
                    value={this.state.currentSearchString}
                />
                <ScrollView
                    style={styles.container}
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

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        paddingVertical: 20,
        fontSize: 20,
        fontFamily: 'DamascusBold',
        color: 'black',
    },
    container: {
        flex: 1,
    },
    paddingToStatusBar: {
        paddingTop: 20,
    },
    topbarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    refreshText: {
        marginLeft: 5,
        fontFamily: 'Damascus',
        fontSize: 16,
    },
});

export default CurrencyList;
