import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';  
import { TextInput, Card, List } from 'react-native-paper';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import { Ionicons} from '@expo/vector-icons'
import SearchScreen from './Component/SearchScreen';
import HomeScreen from './Component/HomeScreen';

const TabNavigator = createBottomTabNavigator({
  "Current City" : HomeScreen,
  "Select City" : SearchScreen,
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintcolor}) => {
      const {routeName} = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if(routeName == 'Current City'){
        iconName = `md-cloud`;
      } else if (routeName == 'Select City'){
        iconName = `md-options`;
      }

      return <IconComponent name={iconName} size={25} color={tintcolor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    activeBackgroundColor: "#6200ee",
    inactiveBackgrundColor: "#6200ee"
  },
}
);

export default createAppContainer(TabNavigator);


