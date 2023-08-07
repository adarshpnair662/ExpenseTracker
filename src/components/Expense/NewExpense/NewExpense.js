import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () =>{
    const  onSaveExpenseData = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:  Math.random().toString()
        };

        console.log(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
        </div>
    );
};

export default NewExpense;