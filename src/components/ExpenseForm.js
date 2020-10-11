import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';   
import 'react-dates/lib/css/_datepicker.css';

const now =moment();



export default class ExpenseForm extends React.Component {
    constructor (props){
        super(props);

        this.state ={
            description: props.expense ? props.expense.description : '',
            notes: props.expense ? props.expense.notes :'',
            amount: props.expense ? (props.expense.amount / 100).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused:false,
            error:''
        };
    }
    
    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}));
            
    };
    onNoteChange =(e)=>{
        const notes= e.target.value;
        this.setState(()=> ({notes}));
    };
    onAmountChange = (e)=>{
        const amount= e.target.value;
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    };
    onDateChange =(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}));
        }
        
    };
    onFocusChange =({focused})=>{
        this.setState(()=> ({calenderFocused:focused}));

    };
    onSubmit=(e)=>{
        e.preventDefault();
        if(! this.state.description || !this.state.amount){
            this.setState(()=>({error:'Please provide description and amount'}))
        }else {
            this.setState(()=>({error:''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt : this.state.createdAt.valueOf(),
                notes: this.state.notes
            })
        }

    };
render(){
    return( 
            <form 
            className='form'
            onSubmit={this.onSubmit}> 
            {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input className='text-input'
                type="text" 
                placeholder="Description" 
                autoFocus
                value ={this.state.description}
                onChange={this.onDescriptionChange}
                />
                <input 
                className='text-input'
                type="text" 
                placeholder ="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                />
                <textarea
                className='text-area'
                placeholder= "Add a note(optional)"
                value={this.state.notes}
                onChange= {this.onNoteChange}
                ></textarea>
                <div>
                <button className='button' >Save Expense</button>
                </div>
            </form>
    )
        
    
}
}