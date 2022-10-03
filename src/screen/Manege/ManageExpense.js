import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

function ManageExpense({navigation}){

    return(
        <View style={styles.conteiner}>
            <View>
                <TextInput />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1
    }
})

export default ManageExpense