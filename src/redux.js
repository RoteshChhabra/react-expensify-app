//import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter, Route, Switch, Link, NavLink} from'react-router-dom';
import AppRouter from './router/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


//ADD_EXPENSE
const addExpense = (
  {description='', note='', amount=0, createdAt =0} ={}
)=> ({
  type:'ADD_EXPENSE',
  expenses:{
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
  });

  //REMOVE_EXPENSE
  const removeExpense =({id}= {})=>(
    {
      type:'REMOVE_EXPENSE',
      id,
    });

//EDIT_EXPENSE
const editExpense=(id,update) =>({
type:'EDIT_EXPENSE',
id,
update
});

//SET_TEXT_FILTER
const setTextFilter =(text='')=>({
  type:'SET_TEXT_FILTER',
  text
});

//SORT_BY_AMOUNT
const sortByAmount = (sortBy='Amount')=> ({
  type:'SORT_BY_AMOUNT',
  sortBy
});

//SORT_BY_DATE
const sortByDate = (sortBy='Date')=> ({
  type:'SORT_BY_DATE',
  sortBy
});

//SET_START_DATE
const setStartDate =(startDate=undefined)=>({
  type:'SET_START_DATE',
  startDate
});

//SET_END_DATE
const setEndDate =(endDate=undefined)=>({
  type:'SET_END_DATE',
  endDate
});




const expensesReducerDefaultState =[];

//Expenses Reducer
const expensesReducer = (state =expensesReducerDefaultState, action)=>{
switch(action.type){
  case 'ADD_EXPENSE':
    return [
      ...state,
      action.expenses
    ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id!==action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
          if(expense.id===action.id){
            return {
              ...expense,
              ...action.update
            };
          } else{
            return state;
          };
      });
  default:
    return state;
}
};

const filtersReducerDefaultState = {
  text:'',
  sortBy:'',
  startDate:undefined,
  endDate:undefined
}

//Filters Reducer
const filtersReducer =(state = filtersReducerDefaultState,action) =>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text:action.text
      };
      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy:action.sortBy
        };
        case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy:action.sortBy
        };
        case 'SET_START_DATE':
          return {
            ...state,
            startDate: action.startDate
          };
          case 'SET_END_DATE':
            return {
              ...state,
              endDate: action.endDate
            };
    default:
      return state;
  }
};

//Get Visible Expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>  {
return expenses.filter((expense) => {
  const startDateMatch = typeof startDate !=='number' || expense.createdAt >=startDate;
  const endDateMatch = typeof endDate !=='number' || expense.createdAt <=endDate;;
  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

  

  return startDateMatch && endDateMatch && textMatch;

}).sort((a,b)=>{
if (sortBy=== 'Date'){
  return a.createdAt<b.createdAt? 1 :-1;
} else if(sortBy ==='Amount'){
  return a.amount<b.amount ? 1:-1;
}
});
};

const store = createStore(
  combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
})
);


store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

  console.log(visibleExpenses);
}
);

const expenseOne=store.dispatch(addExpense({description:'Rent',amount:100, createdAt: 1000}));
const expenseTwo=store.dispatch(addExpense({description:'Cofeet',amount:120,createdAt:-1000}));

// store.dispatch(removeExpense({id : expenseOne.expenses.id}));
// store.dispatch(editExpense(expenseTwo.expenses.id, {amount :30}));

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
 //store.dispatch(setEndDate(999));
// store.dispatch(setEndDate(0));





const demoState= {
  expenses:[{
    id:'dsds',
    description:'Jan Rent',
    note:' Final payment',
    amount:54500,
    createdAt:0
  }],
  filters:{
    text: 'rent', 
    sortBy: 'amount', // date or amount
    startDate : undefined,
    endDate : undefined
  }
}


















ReactDOM.render(
 <AppRouter />,
  document.getElementById('root')
);  

