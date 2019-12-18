import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyHeader from './MyHeader';
import { TextInput, Card, List, Button } from 'react-native-paper';


export default class SearchScreen extends React.Component{
  state = {
    text:'',
    cities:[]

  };

  FetchCities(text){
    this.setState({ text })
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
    .then(data=>data.json())
    .then(city=>{
        this.setState({
          cities:city.RESULTS.slice(0,9)
        })
    })
    console.log(this.state.cities)
  }
  render(){
    renderCity=<Card><List.Item title = "No Cities" /></Card>
    if(this.state.cities.length>0){
      renderCity=this.state.cities.map(city=>{
        return(
          <Card style={{margin:5}} key={city.lat}>
            <List.Item title = {city.name} />
          </Card>
        )
      })
    }
    return (
      <View style={styles.container}>
        <MyHeader title="Search a location"/>  
        <TextInput
        label = 'Enter a location'
        value = {this.state.Text}
        onChangeText={text => this.FetchCities(text)}
        />
        <Button mode="contained" style={{margin:20}} onPres={() => this.buttonclick()}>
          Save Changes
        </Button>
      <ScrollView>
        {renderCity}
      </ScrollView>
      </View>
    )
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    
  },
});
