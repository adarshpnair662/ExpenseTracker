import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
  
  const [filteredYear, setFilteredYear] = useState('2022');

  let filterInfoText =  "2019, 2020 & 2021";
  if(filteredYear === '2019')
    filterInfoText = '2020, 2021 & 2022';
  else if(filteredYear === '2020')
    filterInfoText = '2019, 2021 & 2022';
  else if(filterInfoText === '2021')
    filterInfoText = '2019, 2020 & 2022';

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <p className='paragraph'>Data for the years {filterInfoText} is hidden</p>
      
      {props.items.map(
        (expense) => {
         return( 
         <ExpenseItem key={expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
          /> )
        }
      )}

{/* <ExpenseItem key={props.items[1].id}
          title = {props.items[1].title}
          amount = {props.items[1].amount}
          date = {props.items[1].date}
          /> */}
    </Card>
  );
}

export default Expenses;