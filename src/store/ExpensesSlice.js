import {createSlice} from '@reduxjs/toolkit';

const ExpensesSlice = createSlice({name: 'Expenses',
initialState:[],
reduser:{
    creafeExpanse(state, action){

    },
    updateExpense(state, action){
    }
}
});

export default ExpensesSlice.reducer
export const {creafeExpanse, updateExpense} = ExpensesSlice.actions
