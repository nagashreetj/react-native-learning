import React, { Component } from 'react';
import { View ,StyleSheet,AsyncStorage,FlatList } from 'react-native';
import ListItem from '../fetchAndAsynStorageDemo/ListItem'

export default class FavItemScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ breweries: []}
      }
           
    componentDidMount(){
          this.getBrewery()
      }
    
   async getBrewery(){
    let breweries=  JSON.parse(await AsyncStorage.getItem("breweries"))
    const favBreweris=JSON.parse(await AsyncStorage.getItem("fav_breweries"));

    breweries = breweries.filter(function(item){
            return favBreweris.indexOf(item.id.toString())!=-1;
         }).map(function({id, name, city}){
            return {id, name, city};
        });
         console.log(favBreweris);

         console.log(breweries);
         this.setState({
            breweries
          });
return breweries;
    }
    
      render() {
        return (
            <View style={{backgroundColor:'#F2F3F4'}}>
             
                           <FlatList
                data={this.state.breweries}
                renderItem={({ item }) => (
                  <ListItem navigation={this.props.navigation}
                    name={`${item.name}`}
                    city={`${item.city}`}
                    phone={`${item.phone}`}
                    id={`${item.id}`}
                    item={`${item}`}
                    show={false}
                  />
                )}
              />
            </View>
          );;}
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