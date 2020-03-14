import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class SecondCounterComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginTop:8,marginBottom:8,color:'blue'}}>Second Reducer</Text>

                <Button
                    onPress={() => this.props.incrementByValue()}
                    title="Increase By 15"
                    color="#841584"
                
                />
            <Text style={{marginTop:20,marginBottom:20}}>{this.props.count_by_value}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:130,
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

const mapStateFromProp = (store) => {
    return {
        count_by_value:store.ReducerTwo.count_by_value
    }
}

const mapDispatchToProps = (dispatch) => ({
    incrementByValue: () => dispatch({ type: "INCREASE_COUNT_BY_VALUE" ,value:15}),
});

export default connect(mapStateFromProp, mapDispatchToProps)(SecondCounterComponent);