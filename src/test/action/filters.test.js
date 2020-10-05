import {setTextFilter, sortByAmount,sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object' , ()=>{
    const action= setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object' , ()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('should generate set sort by date action object' , ()=>{
const action=(sortByDate('Date'))
expect(action).toEqual({
    type:'SORT_BY_DATE',
    sortBy: 'Date'
})

});

test('should generate set sort by amount action object' , ()=>{
    const action=(sortByAmount('Amount'))
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        sortBy: 'Amount'
    })

});

test('should generate set text action object with value' , ()=>{
    const action=(setTextFilter('Rent'))
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'Rent'
    })

});

test('should generate set text action object with default value' , ()=>{
    const action=(setTextFilter())
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })

});