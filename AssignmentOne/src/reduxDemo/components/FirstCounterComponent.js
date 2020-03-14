import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class FirstCounterComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginTop:8,marginBottom:8,color:'blue'}}>First Reducer</Text>
                <Button 
                    onPress={() => this.props.increment()}
                    title="Increase Count"
                    color="#841584"  
                />
                
                <Text style={{marginTop:20,marginBottom:20}}>{this.props.count}</Text>
                <Text  style={{marginTop:20,marginBottom:20}}>{this.props.count}</Text>

                <Button
                    onPress={() => this.props.reset()}
                    title="Reset Count"
                    color="#841584"
                
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
            alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginBottom:20
    },
});

const mapStateFromProp = (store) => {
    return {
        count: store.ReducerOne.count,
        count_by_value:store.ReducerTwo.count_by_value
    }
}

const mapDispatchToProp = (dispatch) => ({
    increment: () => dispatch({ type: "INCREASE_COUNT" }),
    reset: () => dispatch({ type: "RESET_COUNT" }),

});

export default connect(mapStateFromProp, mapDispatchToProp)(FirstCounterComponent);