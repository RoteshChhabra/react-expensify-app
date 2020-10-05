import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'



const ExpenseListItem = ({dispatch,description,id, amount, createdAt})=>(
<div>
   <Link to= {`/edit/${id}`}>{description}</Link>
   <p>{amount} - {createdAt}</p>
   <button onClick = {()=>{
      dispatch(removeExpense({id}));
   }
   }>Remove</button>
</div>
);



export default connect()(ExpenseListItem);



