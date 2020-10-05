import selectExpenses from '../../selectors/expenses';
import moment from 'moment';


const expenses =[{
    id:'1',
    description:'Gum',
    note:'',
    amount:200,
    createdAt:0
}, {
    id:'2',
    description:'Rent',
    note:'',
    amount:1220,
    createdAt:moment(0).subtract(4,'days').valueOf()
}, {
    id:'3',
description:'credit card',
note:'',
amount:53320,
createdAt: moment(0).add(4, 'days').valueOf()
}
];
test('should filter by text value' , ()=>{
    const filters={
        text:'e',
        sortBy:'Date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});

test('should filter by start date',()=>{
    const filters ={
        text:'',
        sortBy:'Date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date',()=>{
    const filters ={
        text:'',
        sortBy:'Date',
        startDate:undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});