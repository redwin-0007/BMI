import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    } from 'react-native';

export default class Home extends Component {
  
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.Button}>
      <Button
       title="Height Calculator"
       style={styles.heightButtonStyle}
       onPress={()=>{
            this.props.navigation.navigate("Heightclculator")
           }}>
      </Button></View>
       
      <View style={styles.Button}>
      <Button
       title="BMI Calculator"
       style={styles.heightButtonStyle}
       onPress={()=>{
            this.props.navigation.navigate("BMIhome")
           }}>
      </Button></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#0A79DF"
    },
    heightStyle:{

    },
    heightButtonStyle:{

    },
    bmiStyle:{

    },
    Button:{
        backgroundColor: "#1D1D1B",
        marginTop: 25,
      },
}
);


