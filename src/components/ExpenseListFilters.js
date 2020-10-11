import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from '../actions/filters';

class ExpenseListFilters extends React.Component{
    state={
        calendarFocused: null
    };
    onDatesChange =({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
  };
    onFocusChange =(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));

    };
   
render(){
    return(
            <div className='content-container'>
                <div className='list-filters'>
                    <div className= 'list-filters__item'>
                    <input 
                    className='text-input'
                    placeholder="Search Expenses" type='text' value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                     }} />
                    </div>
                    <div className= 'list-filters__item'>
                    <select 
                    className='select'
                value={this.props.filters.sortBy} 
                onChange={(e)=> {
                    if(e.target.value ==='date'){
                       this.props.dispatch(sortByDate());
                    }else if (e.target.value ==='amount'){
                        this.props.dispatch(sortByAmount());
                    }
                } }
                >
                    <option value='date'>Date</option>
                    <option value ='amount'>Amount</option>
                </select>
                    </div>
                    <div className= 'list-filters__item'>
                    <DateRangePicker
                  startDate={this.props.filters.startDate} 
                  endDate={this.props.filters.endDate} 
                  onDatesChange={this.onDatesChange} 
                  showClearDates={true}
                  focusedInput={this.state.calendarFocused} 
                  onFocusChange={this.onFocusChange} 
                  numberOfMonths={1}
                  isOutsideRange={()=>false}
                />
                    </div>
               
                
                </div>  
            </div>
        );
    
}
};



const mapStateToProps = (state)=> {
    return {
    filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);