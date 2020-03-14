import React, { Component } from 'react';
import { Provider } from 'react-redux';
import FirstCounterComponent from '../reduxDemo/components/FirstCounterComponent';
import SecondCounterComponent from '../reduxDemo/components/SecondCounterComponent';
import {

    View
} from 'react-native';
import FirstReducer from '../reduxDemo/reducers/FirstReducer';
import SecondReducer from '../reduxDemo/reducers/SecondReducer';

import { combineReducers, createStore } from 'redux'

var rootReducer=combineReducers({ReducerOne:FirstReducer,ReducerTwo:SecondReducer})
var store = createStore(rootReducer);

export default class ApplicationOne extends Component {
  constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store} >
                <View style={{ flex: 1,  justifyContent: 'center',
            alignItems: 'center',alignItems: 'center',alignContent: 'center'}}>
                <FirstCounterComponent />
                <SecondCounterComponent/>
                </View>
            </Provider>
        );
    }
}