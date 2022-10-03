import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

function BackButton ({size}){
    const navigation = useNavigation()
    return(
        <Pressable onPress={()=>navigation.navigate('TabNavigation')}>
            <MaterialIcons name='close' size={size}/>
        </Pressable>
    )
}

export default BackButton