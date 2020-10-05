import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from '../actions/filters';

class ExpenseListFilters extends React.Component{
    state={
        calendarFocused: false
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
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                    
                }} />
                <select 
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
                <p>
                <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate ={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                showClearDates={true}
                focusedInput={this.props.filters.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=> false}
                />
                </p>
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