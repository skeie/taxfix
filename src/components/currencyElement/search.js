import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { purple, lemonMeringue } from '../../theme/colors';
import { width as screenWidth } from '../../utils/utils';
const Search = ({ onChangeText, value }) => {
    return (
        <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={value}
            placeholder="Search for currency"
        />
    );
};

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: screenWidth,
        borderColor: lemonMeringue,
        borderWidth: 5,
        paddingLeft: 15,
    },
});

export default Search;
