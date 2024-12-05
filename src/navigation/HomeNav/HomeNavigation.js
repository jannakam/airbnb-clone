import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Explore from '../../screens/Explore'
import Messages from '../../screens/Messages'
import Profile from '../../screens/Profile'
import Wishlists from '../../screens/Wishlists'
import Trips from '../../screens/Trips'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'



const HomeNavigation = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} options={{tabBarIcon: ({color, size}) => <Icon name="home" color={color} size={size} />}}/>
      <Tab.Screen name="Messages" component={Messages} options={{tabBarIcon: ({color, size}) => <Icon name="envelope-o" color={color} size={size} />}}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({color, size}) => <Icon name="user" color={color} size={size} />}}/>
      <Tab.Screen name="Trips" component={Trips} options={{tabBarIcon: ({color, size}) => <Icon name="trip" color={color} size={size} />}}/>
      <Tab.Screen name="Wishlists" component={Wishlists} options={{tabBarIcon: ({color, size}) => <Icon name="heart-o" color={color} size={size} />}}/>
    </Tab.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})