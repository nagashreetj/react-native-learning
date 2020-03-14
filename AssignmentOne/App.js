import {createAppContainer} from "react-navigation" 
import {createStackNavigator, HeaderTitle} from "react-navigation-stack"

import BreweriesScreen from './src/fetchAndAsynStorageDemo/BreweriesScreen'
import BreweriesDetailScreen from './src/fetchAndAsynStorageDemo/BreweriesDetailScreen'
 import FavItemScreen from './src/fetchAndAsynStorageDemo/FavItemScreen'
 import ReduxApp from './src/reduxDemo/ReduxApp'
 import ReactDemo from './src/ReactDemo'






const navigator = createStackNavigator(
  {
    ReactDemo:ReactDemo,
    ReduxApp:ReduxApp,
    Breweries:BreweriesScreen,
    BreweriesDetail:BreweriesDetailScreen,
    FavItem:FavItemScreen,
  },
  {
    InitialRootName:"ReactDemo",

  }
);

export default createAppContainer(navigator)