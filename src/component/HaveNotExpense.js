import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GlobalColor from '../GStyle';

function HaveNotExpense() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <MaterialIcons
        name="list-alt"
        size={100}
        color={GlobalColor.componentlight}
      />
      <Text style={{
        fontSize:12,
        width:"60%",
        color:GlobalColor.text
      }}>
        Your expenses will show up there. Tab the Botton below to create the
        fordt one!
      </Text>
    </View>
  );
}

export default HaveNotExpense