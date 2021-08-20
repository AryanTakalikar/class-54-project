import React, {Component } from 'react';
import { Text, View, Button } from 'react-native';

class RedButton extends Component{
  displayAlert=()=>{
    alert("Sound 1 will be played in the next project")
  }
  render(){
    return(
      <Button title="Sound 1" color="red" onPress={this.displayAlert}/>
    )
  }
}

class OrangeButton extends Component{
  displayAlert=()=>{
    alert("Sound 2 will be played in the next project")
  }
  render(){
    return(
      <Button title="Sound 2" color="orange" onPress={this.displayAlert}/>
    )
  }
}

class YellowButton extends Component{
  displayAlert=()=>{
    alert("Sound 3 will be played in the next project")
  }
  render(){
    return(
      <Button title="Sound 3" color="#FFCA2A" onPress={this.displayAlert}/>
    )
  }
}

class GreenButton extends Component{
  displayAlert=()=>{
    alert("Sound 4 will be played in the next project")
  }
  render(){
    return(
      <Button title="Sound 4" color="green" onPress={this.displayAlert}/>
    )
  }
}

class BlueButton extends Component{
  displayAlert=()=>{
    alert("Sound 5 will be played in the next project")
  }
  render(){
    return(
      <Button title="Sound 5" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component{
  render(){
    return(
      <View style={{}}>
      <View style={{width:"50%",marginTop:70,marginLeft:100}}>
      <RedButton/>
      </View>

      <View style={{width:"50%",marginTop:70,marginLeft:100}}>
      <OrangeButton/>
      </View>

      <View style={{width:"50%",marginTop:70,marginLeft:100}}>
      <YellowButton/>
      </View>

      <View style={{width:"50%",marginTop:70,marginLeft:100}}>
      <GreenButton/>
      </View>

      <View style={{width:"50%",marginTop:70,marginLeft:100}}>
      <BlueButton/>
      </View>
      </View>
    )
  }
}