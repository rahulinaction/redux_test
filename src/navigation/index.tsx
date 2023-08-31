import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from '../screens/list';
import DetailScreen from '../screens/detail';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
