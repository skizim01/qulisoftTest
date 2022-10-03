import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigations from './TabNavigations';
import ManageReport from '../screen/Manege/ManageReport';
import ManageExpense from '../screen/Manege/ManageExpense';
import BackButton from '../UI/BackButton';

const Stack = createNativeStackNavigator();

function StackNavigations() {
  return (
    <Stack.Navigator

    screenOptions={{
      animationTypeForReplace: 'push',
      gestureEnabled:false,
      headerLeft:() => (<BackButton size={30} />)
    }}
      // screenOptions=({
      //   animationTypeForReplace: 'push',
      //   gestureEnabled:false,
      //   headerLeft:() => (<BackButton size={30} )})
        >
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigations}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Manege Report" component={ManageReport} />
      <Stack.Screen
        name="Manage Expense"
        component={ManageExpense}
        options={{}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigations;
