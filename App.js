import { NavigationContainer } from "@react-navigation/native";
import StackNavigations from './src/navigations/StackNavigations';
import store from './src/store/store';
import * as React from 'react';
import { Provider } from "react-redux";
import { Camera } from "react-native-vision-camera";

const App = () => {

  return (
    <Provider store={store}>
   <NavigationContainer>
    <StackNavigations/>
   </NavigationContainer>
   </Provider>
  );
};


export default App;
