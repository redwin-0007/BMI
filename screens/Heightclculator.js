import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet,TouchableWithoutFeedback,Button, Keyboard} from 'react-native';


export default class Heightclculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Feet:0,
        result: ''
    };
  }

  handleHeightCalculator =()=>{
      let HeightCalculator = ((this.state.Feet) *30.48);
       this.setState({
           result:HeightCalculator.toFixed(1)
       });
    }

  render() {
    return (

    <TouchableWithoutFeedback
        onPress = {()=>{
          Keyboard.dismiss
        }}>
      <View  style={styles.container}>
      <Text style={styles.header}>convert ft into cm</Text>
      <View style={styles.Height}>
      <Text style={styles.resultHeader}>feet and inch</Text>
      <TextInput 
      placeholder='Enter' 
      keyboardType='numeric'
      style={styles.input}
      onChangeText={Feet =>{
        this.setState({Feet});
      }}
      />
      </View>

      
      <View style={styles.button} >
      <Button
       onPress = {this.handleHeightCalculator}
      title="Calculate"
       style={styles.buttonText}
      /></View>
      <View>
      <Text style={styles.resultHeader}>Height in cm</Text>
      <Text style={styles.result}>
      {this.state.result}
      </Text>
      </View>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#0A79DF"
},
height:{
    flexDirection: "row"
  },
  header:{
    alignContent:"center",
    justifyContent:"center",
    marginTop:40,
    fontSize:18,
    fontWeight:"bold",
    marginHorizontal:100,
    color:"#AE1438",
    width:200,
    height:50
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:30,
    backgroundColor: "#99AAAB",
    color:"#FFCB1F",
    borderColor: "#2C3335",
    borderWidth: 1,
    alignSelf:"center"
  },
  result:{
    alignSelf: "center",
    color:"#2C3335",
    fontSize: 30,
    borderWidth:1,
    width:"30%",
    textAlign:"center", 
    backgroundColor: "#99AAAB",
  },
  resultHeader:{
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"bold",
    marginHorizontal:140,
    marginTop:20,
    width:"40%",
  },
});