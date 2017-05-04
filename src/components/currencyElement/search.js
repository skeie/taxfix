import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
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
        width: screenWidth - 30,
        margin: 15,
        backgroundColor: '#EBEBEB',
        paddingLeft: 15,
    },
});

export default Search;
