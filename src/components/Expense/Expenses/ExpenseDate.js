import Card from './UI/Card'
import './ExpenseDate.css';

function ExpenseDate(props)
{
    let date = new Date(props.date);
    const month = date.getDay();
    const day   = date.getMonth();
    const year  = date.getFullYear();
    return(
    <Card className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
        </Card>
        );
}

export default ExpenseDate;