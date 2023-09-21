import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [useInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const tilteChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
    //    setUserInput ({
    //     ...useInput, 
    //     enteredTitle: event.target.value,
    //    });

    //    setUserInput( (prevstate) => {
    //     return {...prevstate, enteredTitle: event.target.value};
    //    });

    };
    
    const amountChangeHandler = (event) =>{
          setEnteredAmount(event.target.value);
    };

    const dateChnageHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
       

    };

    const submitFormHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount:  enteredAmount,
            date: enteredDate
        };

        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

 return(
    <form onSubmit={submitFormHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input 
            type='text' 
            value={enteredTitle} 
            onChange={tilteChangeHandler}
            />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' value={enteredAmount} min="0.001" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChnageHandler}/>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </div>
    </form>
 );
};

export default ExpenseForm;