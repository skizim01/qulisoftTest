import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

function ExpenseItem (){
    return(
        <View >
            <View>
<MaterialIcons name="attach-money"/>
            </View>
            <View>
                <View>
                    <Text>gasssss</Text>
                    <Text>2000$</Text>
                </View>
                <View>
                    <Text>GAS</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    conteiner:{
        width:200,
        justifyContent:"space-between"
    }
})

export default ExpenseItem