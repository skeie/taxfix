import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { paradisePink, purple, blue } from '../../theme/colors';
import { convertCurrency } from '../convertCurrencies/convertCurrencies';
import {
    width as screenWidth,
    height as screenHeigth,
} from '../../utils/utils';
const Result = ({ sum, rate, userAmount, currency }) => (
    <View style={styles.resultContainer}>

        <Text style={styles.multiply}>
            X
        </Text>

        <Text style={styles.text}>
            {rate}
        </Text>
        <View style={styles.currencyContainer}>
            <Text style={styles.sum}>
                = {sum}
            </Text>
            <Text style={styles.currencyName}>
                {currency}
            </Text>
        </View>
    </View>
); /* need to have a view as a wrapper in order to get the border bottom */
const CurrencyInput = ({
    userAmount,
    onUserAmountChange,
    onBlur,
    isActive,
    onFocus,
}) => (
    <View
        style={[
            styles.currencyInputContainer,
            { borderBottomColor: isActive ? blue : 'black' },
        ]}>
        <TextInput
            style={styles.textInput}
            placeholderTextColor="black"
            selectionColor={blue}
            onBlur={onBlur}
            keyboardType="numeric"
            onChangeText={onUserAmountChange}
            placeholder="Amount"
            defaultValue={userAmount}
            onFocus={onFocus}
        />
    </View>
);

const EuroInput = props => (
    <View
        style={{
            width: '30%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Text style={styles.currencyName}>
            EUR
        </Text>
        <CurrencyInput {...props} />
    </View>
);
class CurrencyRate extends Component {
    state = {
        sum: 0,
        userAmount: '1',
        isActive: false,
    };
    componentDidMount() {
        const defaultTextInputValue = '1';
        this.onUserAmountChange(defaultTextInputValue);
    }
    onUserAmountChange = userAmount => {
        this.setState({
            userAmount,
            sum: convertCurrency(this.props.rate, userAmount),
        });
    };
    onTextInputBlur = () => {
        this.setState({ isActive: false });
    };
    onTextInputFocus = () => {
        this.setState({
            isActive: true,
        });
    };
    render() {
        const { currency, rate } = this.props;
        return (
            <View style={[styles.container]}>
                <EuroInput
                    {...this.state}
                    onUserAmountChange={this.onUserAmountChange}
                    onBlur={this.onTextInputBlur}
                    onFocus={this.onTextInputFocus}
                />
                <Result
                    rate={rate}
                    onUserAmountChange={this.onUserAmountChange}
                    onBlur={this.onTextInputBlur}
                    onFocus={this.onTextInputFocus}
                    currency={currency}
                    {...this.state}
                />

            </View>
        );
    }
}
export default CurrencyRate;
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'Damascus',
        color: 'black',
    },
    currencyName: {
        fontSize: 20,
        fontFamily: 'Damascus',
        color: 'black',
        marginHorizontal: 5,
        marginBottom: 3,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 77,
        paddingHorizontal: 40,
        borderColor: '#EBEBEB',
        borderWidth: 1,
    },
    resultContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
    },
    multiply: {
        fontSize: 15,
        fontFamily: 'Damascus',
        color: '#A4B0BC',
        marginHorizontal: 5,
    },
    currencyContainer: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 30,
        fontSize: 20,
        fontFamily: 'Damascus',
        color: 'black',
        textAlign: 'center',
    },
    currencyInputContainer: {
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: screenWidth / 5,
        marginHorizontal: 10,
    },
    sum: {
        fontSize: 20,
        fontFamily: 'Damascus',
        color: 'black',
        marginLeft: 5,
    },
});
