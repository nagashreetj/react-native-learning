import React ,{useState} from 'react';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';


const ListItem = (props)=> {
    const [fav, setFav] = useState(false);
    let favBreweries = [];
    const makeFavorite = async () => {
        if(await AsyncStorage.getItem("fav_breweries")!=null)
       favBreweries=JSON.parse(await AsyncStorage.getItem("fav_breweries"));
            if(fav){
                favBreweries = favBreweries.filter((val)=> val != props.id )
                await AsyncStorage.setItem("fav_breweries", JSON.stringify(favBreweries));
                setFav(false)
                
            }
            else{
                
                favBreweries[favBreweries.length]=props.id;
                console.log( favBreweries.length);

                 try {
                    await AsyncStorage.setItem("fav_breweries", JSON.stringify(favBreweries));
                    console.log( JSON.parse(await AsyncStorage.getItem("fav_breweries")));
                  } catch (error) {
               }
                setFav(true)
    
            }

      

    return 0
      }
  return (
      <View style={styles.container} >

      <TouchableOpacity onPress={()=>props.navigation.navigate('BreweriesDetail',{id:props.id})}>
    <View >
    <Text style={styles.text}>{props.name}</Text>
      <Text><Text style={styles.text2}>City: </Text>{props.city}</Text>
                <Text><Text style={styles.text2}>Phone: </Text>{props.phone}</Text>

 </View>
 </TouchableOpacity>
 {props.show ? (
           <Icon style={{alignSelf:"flex-end",position:"absolute",paddingEnd:16,paddingBottom:20}} name="heart" size={20} color={fav?"red":"gray"} onPress={() => makeFavorite()} />

        ) : null}

 </View>
  );


}



const styles = StyleSheet.create({
  container: {
      padding:12,
    flex: 1,
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
    fontSize: 14,
}
});
export default ListItem;