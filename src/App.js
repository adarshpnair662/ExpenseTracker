import { useState } from 'react';
import Expenses from './components/Expense/Expenses/Expenses';
import NewExpense from './components/Expense/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date('2022-03-25'),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date('2022-03-25') },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date('2022-03-25'),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date('2022-03-25'),
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;