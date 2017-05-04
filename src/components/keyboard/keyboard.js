import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';

import { width, height } from '../../utils/utils';

const viewHeight = height / 3;
const elementHeight = viewHeight / 2;

const styles = StyleSheet.create({
    element: {
        width: width / 3,
        alignItems: 'center',
        justifyContent: 'center',
        height: elementHeight,
        borderWidth: 5,
        borderRadius: 2,
        borderColor: '#EDE6D3',
        backgroundColor: 'white',
    },
    elementColor: {
        color: '#6D1B15',
    },
    NextBtn: {
        backgroundColor: '#3871B5',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: elementHeight,
    },
    text: {
        fontSize: 20,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Element extends Component {
    state = {};
    onPress = () => {
        console.log(this.props.output);
        // this.props.onPress(this.props.output);
    };

    render() {
        const { output } = this.props;
        // const imageWidth = isNumber ? widt;
        return (
            <TouchableOpacity onPress={this.onPress} style={styles.element}>
                <Text>{output}</Text>
            </TouchableOpacity>
        );
    }
}

class Keyboard extends Component {
    onPress = text => {
        if (text.indexOf('KG') >= 0) {
            text = text + ' * ';
        }
        this.props.dispatch(updateText(text));
    };

    onNext = () => {};

    onFailPress = () => {};

    render() {
        return (
            <View style={styles.container}>
                <Element output="1" onPress={this.onPress} />
                <Element output="2" onPress={this.onPress} />
                <Element output="3" onPress={this.onPress} />
                <Element output="4" onPress={this.onPress} />
                <Element output="5" onPress={this.onPress} />
                <Element output="6" onPress={this.onPress} />
                <Element output="7" onPress={this.onPress} />
                <Element output="8" onPress={this.onPress} />
                <Element output="9" onPress={this.onPress} />
                <Element output="KG" onPress={this.onPress} />
                <Element output="0" onPress={this.onPress} />
                <Element output="FAIL" onPress={this.onFailPress} />
            </View>
        );
    }
}

export default Keyboard;
