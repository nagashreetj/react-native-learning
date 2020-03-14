import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class ReactDemo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:'white',backgroundColor:'#841584',padding: 10,margin:10,width:180,textAlign:"center",fontSize:16}}
                    onPress={() => this.props.navigation.navigate('Breweries')}
                    color="#841584"
                >Fetch And Async Storage</Text>
                <Text style={{color:'white',backgroundColor:'#841584',padding: 10,margin:10,width:180,textAlign:"center",fontSize:16}}
                    onPress={() => this.props.navigation.navigate('ReduxApp')}
                >Redux Demo</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginBottom: 20,
        justifyContent:"center"
    },
});