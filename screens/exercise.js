import React from 'react';
import {View,
       Text ,
       StyleSheet

} from 'react-native';

export default class exercise extends React.Component{
    render(){
        return(
        <View style={styles.container}>
        <Text style={styles.header}>
        TIPS FOR EXERCISE SAFELY :-
        </Text>
        <Text style={styles.sideHeader}>
        => 10 Tips of exercise daily :-
        </Text>
        <Text style={styles.tipsDetail}>
         * Be aware of your body. {"\n"}
         * Warm up and cool down.{"\n"}
         * Pace yourself.{"\n"}
         * Mix it up.{"\n"}
         * Strap or tape. {"\n"}
         * Stay hydrated.{"\n"}  
         * Be weather aware. {"\n"}
         * Do it right. {"\n"}
         * Check your gear. {"\n"}
         * Be sensible.{"\n"}
        </Text>
        </View>

        );
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#7B8788"
},
header:{
    alignContent:"center",
    justifyContent:"center",
    marginTop:20,
    fontSize:18,
    fontWeight:"bold",
    marginHorizontal:60,
    color:"#AE1438",
    width:300,
    height:50
    },
sideHeader:{
    fontSize:17,
    fontWeight:"bold",
    color:"#AE1438"
},
tipsDetail:{
fontSize:15,
fontWeight:"bold",
marginHorizontal:40

}
})