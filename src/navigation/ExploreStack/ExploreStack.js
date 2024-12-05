import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../../screens/Explore';
import Property from '../../screens/Property';

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ExploreScreen" 
        component={Explore} 
        // options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Property" 
        component={Property}
        options={{ 
          headerTransparent: true,
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: '#000'
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack; 