import React, { Component } from 'react';
import { Text,View ,StyleSheet,ActivityIndicator,StatusBar} from 'react-native';

export default class BreweriesDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true,breweriesDetail:{name:"",city:"",phone:"",website_url:""}}
      }
    
      componentDidMount(){
        StatusBar.setHidden(false);
        console.log(this.props.navigation.state.params.id);
        return fetch(`https://api.openbrewerydb.org/breweries/${this.props.navigation.state.params.id}`)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);

            this.setState({
              isLoading: false,
              breweriesDetail: responseJson,
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    
    
    
      render() {
        if (this.state.isLoading) {
            //Loading View while data is loading
            return (
              <View style={{ flex: 1,alignItems: "center", alignContent: "center", color:"#E5E7E9" }}>
                <ActivityIndicator style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 100,
                }} size="large" color='#DC7633' />
              </View>
            );
          }
          return (
            <View style={styles.container}>
      <Text style={styles.text}>{this.state.breweriesDetail.name}</Text>
      <Text><Text style={styles.text2}>City: </Text>{this.state.breweriesDetail.city}</Text>
                <Text><Text style={styles.text2}>Phone: </Text>{this.state.breweriesDetail.phone}</Text>
                <Text><Text style={styles.text2}>Website : </Text>{this.state.breweriesDetail.website_url}</Text>

 </View>
          );}
    }


const styles = StyleSheet.create({
    container: {
        padding:12,
      marginTop:16,
      marginBottom:16,
      backgroundColor: 'white',
      marginStart:30,
      borderRadius:8,
      marginEnd:30,
      justifyContent: 'center',
    },
    text:{
          color: '#DC7633',
          fontWeight: "bold",
          fontSize: 20,
  },
  text2:{
      color: '#DC7633',
      fontWeight: "bold",
      marginTop:4,
      flex: 1,
      fontSize: 14,
  }
  });