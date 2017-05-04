/**
 * @flow
 */

import React, { Component } from 'react';
import { loadOfflineData } from './store';
import { Provider } from 'react-redux';
import { store } from './store';
import { connect } from 'react-redux';
import Routes from './components/router/routes';

export default class App extends Component {
    state = {
        loaded: false,
    };
    shouldComponentUpdate(nextProps: Object, { initialRouteName, loaded }) {
        return loaded && !this.state.loaded;
    }

    componentDidMount() {
        loadOfflineData().finally(() => {
            this.setState({
                loaded: true,
            });
        });
    }

    render() {
        if (!this.state.loaded) return null;
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}
