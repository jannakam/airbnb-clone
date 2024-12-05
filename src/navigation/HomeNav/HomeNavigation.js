import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Explore from '../../screens/Explore'
import Messages from '../../screens/Messages'
import Profile from '../../screens/Profile'
import Wishlists from '../../screens/Wishlists'
import Trips from '../../screens/Trips'



const HomeNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Trips" component={Settings} />
      <Stack.Screen name="Wishlists" component={Wishlists} />

    </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})