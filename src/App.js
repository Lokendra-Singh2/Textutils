import React,{useState} from "react";
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

     let Dummy_Expense = [
     {
          id : 'e1',
          title : 'food',
          amount : 200,
          date : new Date(2021, 5, 28) 
     },

     {
          id : 'e2',
          title : 'school',
          amount : 200,
          date : new Date(2021, 5, 25)
     },

     {
          id : 'e3',
          title : 'car',
          amount : 150,
          date : new Date(2021, 6, 15)
     },

     {
          id : 'e4',
          title : 'Health',
          amount : 800,
          date : new Date(2021, 4, 25)
     }
     ];
     
     const App= (props) => {
     const [expenses,setExpenses] = useState(Dummy_Expense);
        
     const addNewExpenseHandler = (expense) => {

          const updatedExpense = [expense, ...expenses];
          setExpenses(updatedExpense);
     };

     return (
     <div>
          <NewExpense onAddExpense = {addNewExpenseHandler}/>
          <Expenses item ={expenses}/>
     </div>
);
     }

export default App;