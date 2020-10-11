import expenses from "./expenses";

export default (visibleExpenses)=>{
    if(visibleExpenses.length===0){
        return 0;
    }
    else {
return visibleExpenses.map((expense)=>expense.amount).reduce((sum,value)=> sum+value)
    }
    }