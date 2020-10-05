import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

    test('should set up remove expense action ',()=>{
        const action = removeExpense({id:'123abc'});
        expect(action).toEqual({
            type:'REMOVE_EXPENSE',
            id:'123abc'
        })
    });

    test('should set up edit expense action ', ()=>{
        const action=editExpense('123abc',{note:'New note', description:'New'})
        expect(action).toEqual({
            type:'EDIT_EXPENSE',
            id:'123abc',
            update: { note:'New note', description:'New'}
        })

    });

    test('should set up add expense action with provided values' , ()=>{
        const expenseData={
            description:'rent',
            amount:23230,
            createdAt:1000,
            note: 'This was last mont rent'
        }
        const action = addExpense(expenseData);
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expenses:{
                id:expect.any(String),
                ...expenseData
                
            }
        })
    });

    test('should set up add expense action with default values' , ()=>{
        const action = addExpense();
        expect(action).toEqual({
            type:'ADD_EXPENSE',
            expenses:{
                id:expect.any(String),
                description:'', 
                note:'',
                amount:0,
                createdAt :0
            }

        })
    });