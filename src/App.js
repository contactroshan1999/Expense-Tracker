import React ,{ useState } from 'react';
import Expenses from './Component/Expenses/Expenses';
import NewExpense from './Component/NewExpense/NewExpense';

let dummy_expenses=[
  {
    id:1,
    title:'School Fees',
    amount:500,
    date: new Date(2022,9,10)
  }
]


const App = () => {
  let expenseDate = new Date(2022,10,22);
  let expenseTitle= "School Fees";
  let expenseAmount= 400;
  const [expenses,setExpenses]=useState(dummy_expenses);
//   let expenses=[
//     {
//       id:1,
//       title:'School Fees',
//       amount:500,
//       date: new Date(2022,9,10)
//     },
//     {
//       id:2,
//       title:'Tution Fees',
//       amount:800,
//       date: new Date(2022,9,15)
//     },
// ]

const addExpenseHandler = (expense) =>
{
  const updatedExpenses =[expense,...expenses]
  setExpenses(updatedExpenses);
  console.log(expense);
}
  return (
    <div>

        <NewExpense onAddExpense ={addExpenseHandler}/>
        <Expenses item={expenses}/>
        
   </div>
  );
}

export default App;
