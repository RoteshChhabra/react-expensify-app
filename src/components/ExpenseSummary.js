import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import {Link} from 'react-router-dom';



 const ExpenseSummary =({expenseCount, expensesTotal})=>
     {

        const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;

                return (
            <div className='page-header'>
            <div className='content-container'>
           <h1 className='page-header__title'>
            Viewing <span >{expenseCount}</span> expenses totalling <span >${expensesTotal/100}</span>
            </h1> 
            <div className= 'page-header__actions'>
                <Link className='button' to='/create'>Add Expense</Link>
            </div>
            </div>
             </div>

        );

     }
  


const mapStateToProps=(state)=>{
    const visibleExpenses =selectExpenses(state.expenses, state.filters)
return {
    expenseCount : visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses)

}
}


export default connect(mapStateToProps)(ExpenseSummary);