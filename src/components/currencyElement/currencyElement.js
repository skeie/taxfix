import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { paradisePink, purple } from '../../theme/colors';
import { convertCurrency } from '../convertCurrencies/convertCurrencies';
import {
    width as screenWidth,
    height as screenHeigth,
} from '../../utils/utils';
const Result = ({ sum, rate, userAmount, currency }) => (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%',
        }}>

        <Text
            style={{
                fontSize: 15,
                fontFamily: 'Damascus',
                color: 'white',
                marginHorizontal: 5,
            }}>
            X
        </Text>

        <Text style={styles.text}>
            {rate}
        </Text>
        <View
            style={{
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <Text
                ellipsizeMode="head"
                style={{
                    fontSize: 20,
                    fontFamily: 'DamascusBold',
                    color: 'white',
                    marginLeft: 5,
                }}>
                = {sum}
            </Text>
            <Text style={styles.currenyName}>
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
        style={{
            borderBottomWidth: 2,
            borderBottomColor: isActive ? '#F4E8C1' : 'white',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            width: screenWidth / 5,
            marginHorizontal: 10,
        }}>
        <TextInput
            style={{
                height: 30,
                fontSize: 20,
                fontFamily: 'DamascusBold',
                color: 'white',
                textAlign: 'center',
            }}
            placeholderTextColor="#F4E8C1"
            selectionColor="#F4E8C1"
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
        <Text style={styles.currenyName}>
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
        const { isPinkColor, currency, rate } = this.props;
        return (
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: isPinkColor ? paradisePink : purple,
                    },
                ]}>
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
        fontFamily: 'DamascusBold',
        color: 'white',
    },
    currenyName: {
        fontSize: 14,
        fontFamily: 'DamascusBold',
        color: 'white',
        marginHorizontal: 5,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: screenHeigth / 5,
        paddingHorizontal: 40,
    },
});
