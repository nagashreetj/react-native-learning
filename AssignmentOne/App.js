import {createAppContainer} from "react-navigation" 
import {createStackNavigator} from "react-navigation-stack"

import BreweriesScreen from './src/BreweriesScreen'
import BreweriesDetailScreen from './src/BreweriesDetailScreen'
 import FavItemScreen from './src/FavItemScreen'




const navigator = createStackNavigator(
  {
    Breweries:BreweriesScreen,
    BreweriesDetail:BreweriesDetailScreen,
    FavItem:FavItemScreen,
  },
  {
    InitialRootName:"Breweries"
  }
);

export default createAppContainer(navigator)