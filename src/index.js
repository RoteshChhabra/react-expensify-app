//import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import {BrowserRouter, Route, Switch, Link, NavLink} from'react-router-dom';
import AppRouter from './router/AppRouter'
import configureStore from '../src/store/configureStore';
import getVisibleExpenses from '../src/selectors/expenses';
import {addExpense} from './actions/expenses';
//import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const store = configureStore();


store.dispatch(addExpense({description:'Water bill',amount:1200}));
store.dispatch(addExpense({description:'Gas bill',amount:1000}));
store.dispatch(addExpense({description:'Rent',amount:5000}));
//store.dispatch(setTextFilter('Water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx= (
  <Provider store= {store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);

