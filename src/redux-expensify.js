import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add_Expense
const addExpense =(
    {description ='',
     note ='' , 
     amount = 0, 
     createdAt = 0} ={}
        ) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid()
    }
});


//Expenses Reducers
const expensesReducerDefaultState =[];
const filtersReducerDefaultState ={
    text: '',
    sortBy: 'date',
    startDate :undefined,
    endDate :undefined
};

const expensesReducer = (state =expensesReducerDefaultState, action)=>{
switch(action.type) {
    default:
        return state;
}
};

const filtersReducer = (state =filtersReducerDefaultState, action) =>{
    switch(action.type) {
        default:
            return state;
    }
};

const store =createStore(
    combineReducers({
        expenses: expensesReducer,
        filters : filtersReducer
    })
    );




const demoState= {
    expenses:[{
        id: 'ddds',
        description:'dsds',
        note :'last bill',
        amount: 54500,
        createdAt: 0

    }],
    filters:{
        text:'rent',
        sortBy: amount, // date or amount
        startDate:undefined,
        endDate:undefined
    }
}

