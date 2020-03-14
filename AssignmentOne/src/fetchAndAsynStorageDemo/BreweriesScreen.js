import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator, AsyncStorage} from 'react-native';
import { SearchBar} from 'react-native-elements';
import ListItem from '../fetchAndAsynStorageDemo/ListItem'
import Icon from 'react-native-vector-icons/AntDesign';


export default class BreweriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, breweries: [], search: '' };
    this.arrayholder = [];
  }
  static navigationOptions = (props)=>{
   return {
    headerRight: () => (
     <Icon style={{marginEnd:20}}name="heart" size={20} color="red" onPress={() => props.navigation.navigate('FavItem')}/>

    )
    // header:null,

   }
};
  componentDidMount() {
    return fetch('https://api.openbrewerydb.org/breweries')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            breweries: responseJson,
          },
          async function () {
            this.arrayholder = responseJson;
            await AsyncStorage.setItem("breweries", JSON.stringify(responseJson));


          }
        );

      })
      .catch((error) => {
        console.error(error);
      });
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      breweries: newData,
      search: text,
    });
  }
  render() {

    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, alignItems: "center", alignContent: "center", color: "#E5E7E9" }}>
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
      <View style={{ backgroundColor: '#F2F3F4', marginBottom: 98 }}>
        <SearchBar
          lightTheme
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Search Breweries..."
          value={this.state.search}
        />
        <FlatList
          data={this.state.breweries}
          renderItem={({ item }) => (
            <ListItem navigation={this.props.navigation}
              name={`${item.name}`}
              city={`${item.city}`}
              phone={`${item.phone}`}
              id={`${item.id}`}
              item={`${item}`}
              show={true}

            />
          )}
        />
      </View>
    );
  }
}
