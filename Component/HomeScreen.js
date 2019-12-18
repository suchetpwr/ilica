import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Image } from 'react-native';
import MyHeader from './MyHeader';
import { TextInput, Card, List, Title } from 'react-native-paper';


export default class SearchScreen extends React.Component{
  state={
    info:{
      name:"loading",
      temp:"loading",
      humidity:"loading",
      desc:"loading",
      icon:"loading"
    }
  }

  getWeather(){
    Mycity = "Edison"
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Mycity}&units=metric&APPID=64fb24c28dfce3debe5504233411f148`)
    .then(res=>res.json())
    .then(data=>{
    this.setState({
      info:{
        name:data.name,
        temp:data.main.temp,
        humidity:data.main.humidity,
        desc:data.weather[0].decsription,
        icon:data.weather[0].icon
      }
   })
  }).catch(err=>{
    Alert.alert("Erorr "+err.message+"Please connect to internet", [{text:"ok"}])
  })
  }

  componentDidMount(){
    this.getWeather()
  }
  render(){
    
    return (
      <View style={styles.container}>
        <MyHeader title="Current Location"/>  
        <Card style={{margin:20}}>
          <View style={{padding:20, alignItems:"center"}}>
            <Title style={styles.text}>{this.state.info.name}</Title>
            <Image style={{width:120, height:120}}
              source={{uri:'http://openweathermap.org/img/w/'+this.state.info.icon+".png"}} />
            <Title style={styles.text}>TEMPREATURE:{this.state.info.temp}</Title>
            <Title style={styles.text}>HUMIDITY:{this.state.info.humidity}</Title>
            <Title style={styles.text}>DESCRIPTION:{this.state.info.desc}</Title>
          </View>
        </Card>
        </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    
  },
  text:{
    textAlign:'center',
    marginBottom:10
  }
})
