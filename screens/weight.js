import React from 'react';
import {View,
       Text ,
       StyleSheet

} from 'react-native';

export default class weight extends React.Component{
    render(){
        return(
        <View style={styles.container}>
        <Text style={styles.header}>
        IF YOUR BODY WEIGHT IS UNDER :-
        </Text>
        <Text style={styles.sideHeader}>
          If Your body is under Weight :-
        </Text>
        <Text style={styles.tipsDetail}>
         * Eat more frequently.{"\n"}
         * Choose nutrient-rich foods.{"\n"}
         * Try smoothies and shakes.{"\n"}
         * Watch when you drink.{"\n"}
         * Make every bite count.{"\n"}
         * Have an occasional treat.{"\n"}  
         * Exercise. {"\n"}
        </Text>
        <Text style={styles.sideHeader}> 
         If your body is Normal Weight :-
        </Text>
        <Text style={styles.tipsDetail}>
         * Exercise.{"\n"}
         * Choose nutrient food.{"\n"}
         * Make every bite count.{"\n"}
         * Try smoothies and shakes.{"\n"}
        </Text>

        <Text  style={styles.sideHeader}>
         If your body is Over Weight and Obesity :-
        </Text>
        <Text style={styles.tipsDetail}>
        * Eat more fruit, vegetables, nuts, and whole grains.{"\n"}
        * Exercise, even moderately, for at least 30 minutes a day.{"\n"}
        * Cut down your consumption of fatty and sugary foods.{"\n"}
        * Use vegetable-based oils rather than animal-based fats.{"\n"}
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