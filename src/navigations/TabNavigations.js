import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons';
import ExpensesScreen from '../screen/ExpensesScreen';
import ReportScreen from '../screen/ReportScreean';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SettingsScreen from '../screen/SettingsScreen';
const Tab = createBottomTabNavigator()

function TabNavigations() {
  return (
    <Tab.Navigator >
      <Tab.Screen name='Expenses' component={ExpensesScreen}  
      options={{
        tabBarIcon: ({ color, size }) => (
          <Foundation name="credit-card" size={size} color={color} />
        ),
      }}/>
      <Tab.Screen name='Reports' component={ReportScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="list-alt" size={size} color={color} />
        ),
      }}/>
      <Tab.Screen name='Settings' component={SettingsScreen}   options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="more-horiz" size={size} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default TabNavigations