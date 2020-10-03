import React from 'react';
import {View,
   Text,
   StyleSheet,
   TextInput,
   TouchableWithoutFeedback,
   Keyboard,
   Button,
   ScrollView
 } from 'react-native';

export default class BMI extends React.Component{
  constructor(props){
    super(props);
      this.state={
        Height:0,
        Mass:0,
        resultNumber:0,
        resultText:'',
        resultTips:''
      };
  }
 
 handleCalculator = ()=>{
   let BMI = this.state.Mass/(this.state.Height*0.01)**2;
   this.setState({
     resultNumber:BMI.toFixed(2)
   });
if (BMI < 18.5) {
  this.setState({resultText:"Under Weight"})
} else if (BMI > 18.5 && BMI < 25) {
  this.setState({resultText:'Normal Weight'})
} else if(BMI >= 25 && BMI < 30){
  this.setState({resultText:"Over Weight"})
} else {
  this.setState({resultText:"Obesity"})
}
 };

  render(){
    return(
      <TouchableWithoutFeedback
      onPress = {()=>{
        Keyboard.dismiss
      }}>
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.header}>BMI Calculator and Tips</Text>
      <View style={styles.Height}>
      <Text style={styles.resultHeader}>Height in (cm)</Text>
      <TextInput 
      placeholder='Height in cm' 
      keyboardType='numeric'
      style={styles.input}
      onChangeText={Height =>{
        this.setState({Height});
      }}
      /></View>
      <View style={styles.Height}>
      <Text style={styles.resultHeader}>Weight in (Kg)</Text>
      <TextInput
      placeholder= 'Mass in Kg'
      keyboardType= 'numeric'
      style={styles.input}
      onChangeText = {Mass => {
        this.setState({Mass});
      }}
      />
      </View>
      <View style={styles.button} >
      <Button
       onPress = {this.handleCalculator}
      title="Calculator"
       style={styles.buttonText}
      /></View>
      <View>
      <Text style={styles.resultHeader}>BMI</Text>
      <Text style={styles.result}>
      {this.state.resultNumber}
      </Text>
      <View >
      <Text style={styles.resultHeader}>Weight Discription</Text>
      <Text style={styles.tipsresult}>
      {this.state.resultText}
      </Text>
      </View>
      </View>
      <View>
      <Text style={styles.resultTips}>
      {this.state.resultTips}
      </Text>
      </View>
      
      <View style={styles.tipsButton}>
      <Button
       title="Tips For Weight"
       style={styles.weightTips}
       onPress={()=>{
            this.props.navigation.navigate("weight")
           }}>
      </Button></View>
        <View style={styles.tipsButton}> 
        <Button
        title="Tips For Exercise"
        style={styles.tipsExercise}
        onPress={()=>{
        this.props.navigation.navigate("exercise")
      }}>
        
      </Button>
      </View>
      </View>
      <View>
      <Text style={styles.lowerText}>
      This instruction help for your boday fittnes.
      
      </Text>
      </View>
      </ScrollView>
      
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
tipsresult:{
  width:"60%",
  alignSelf:"center",
  color:"#2C3335",
  borderWidth: 1,
  textAlign: "center",
  fontSize: 30,
  backgroundColor: "#99AAAB",
},
buttonText:{
  alignSelf: 'center',
  padding: 30,
  fontSize: 25,
  color: "#99AAAB",
  fontWeight:"bold",
  borderWidth: 1,
},
button:{
  backgroundColor: "#1D1D1B",
  marginTop: 24,
},
tipsButton:{
  flex:1,
  width:"50%",
  padding:8,
  flexDirection:"row",
},
weightTips:{
  fontWeight:"bold",
  fontSize: 15,
  borderWidth:1,
  textAlign: "center",
  backgroundColor: "#99AAAB",
  marginTop:10,
},
tipsExercise:{
  fontSize: 15,
  fontWeight: "bold",
  borderWidth: 1,
  textAlign: "center",
  backgroundColor: "#99AAAB",
  marginLeft:250,
},
resultHeader:{
  justifyContent:"center",
  alignItems:"center",
  fontWeight:"bold",
  marginHorizontal:140,
  marginTop:20,
  width:"40%",
},
lowerText:{
  marginLeft: 56
}

});