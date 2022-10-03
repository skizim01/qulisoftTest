import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ExpenseItem from '../component/ExpenseItem';
import HaveNotExpense from '../component/HaveNotExpense';
import AddButton from '../UI/AddButton';

function ExpensesScreen({navigation: {navigate}}) {
    
  const expenses = useSelector(state => state.ExpensesSlice);

  return (
    <View style={styles.conteiner}>
      <View style={styles.contentConteiner}>
        {expenses[0] ? (
          <FlatList data={expenses} renderItem={ExpenseItem} />
        ) : (
          <HaveNotExpense />
        )}
      </View>
      <AddButton
        label="Create Expense"
        icocnName={'add'}
        size={20}
        onPress={()=> navigate('Manage Expense')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
  },
  contentConteiner: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default ExpensesScreen;
