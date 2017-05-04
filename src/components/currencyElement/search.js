import React from 'react';
import { TextInput } from 'react-native';
import { purple } from '../../theme/colors';
import { width as screenWidth } from '../../utils/utils';
const Search = ({ onChangeText, value }) => {
    return (
        <TextInput
            style={{
                height: 50,
                width: screenWidth,
                borderColor: '#F4E8C1',
                borderWidth: 5,
                paddingHorizontal: 5,
            }}
            onChangeText={onChangeText}
            value={value}
            placeholder="Search for currency"
        />
    );
};

export default Search;
