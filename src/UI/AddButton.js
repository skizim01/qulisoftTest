import { useNavigation } from "@react-navigation/native";
import { Pressable , View, Text, StyleSheet} from "react-native";
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import GlobalColor from '../GStyle';

function AddButton ({icocnName, size, onPress,label}){
    return(
        <Pressable style={styles.button} onPress={onPress}>
        <View style={styles.icon} >
            <MaterialIcons name={icocnName} size={size}  color={GlobalColor.darkText}/>
        </View >
        <Text style={styles.text}>{label}</Text>
    
      </Pressable>
    )
}

const styles = StyleSheet.create({
    
    button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      width:150,
      maxWidth:250,
      borderRadius: 30,
      backgroundColor: GlobalColor.componentlight,
      marginBottom:5
    },
  
    text:{
      color:GlobalColor.darkText,
      marginRight:10
    },
    icon:{
  marginLeft:10
    }
  })

export default AddButton