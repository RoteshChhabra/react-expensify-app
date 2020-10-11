//import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import {BrowserRouter, Route, Switch, Link, NavLink} from'react-router-dom';
import AppRouter,{history} from './router/AppRouter'
import configureStore from '../src/store/configureStore';
import getVisibleExpenses from '../src/selectors/expenses';
import {startSetExpense} from './actions/expenses';
import {login, logout} from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase } from '../src/firebase/firebase';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const store = configureStore();

// store.dispatch(addExpense({description:'ada', amount:22}))
// store.dispatch(addExpense({description:'addea', amount:22}))

// console.log(store.getState());


const jsx= (
  <Provider store= {store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp=()=>{
if(!hasRendered){
  ReactDOM.render(jsx,document.getElementById('root'));
  hasRendered= true;
}
};

ReactDOM.render(
  <p>'Loading...'</p>,  
  document.getElementById('root')
);



firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpense()).then(()=>{
     renderApp();
     if(history.location.pathname==='/'){
       history.push('/dashboard');
     }
    });
  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})

