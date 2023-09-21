import Chart from '../Chart/Chart'

function ExpensesChart(props)
{
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Jun', value: 0},
        {label: 'July', value: 0},
    ];
    
    for(const expense of props.expenses)
    { 
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    
    return( <Chart dataPoints ={chartDataPoints} />);
}

export default ExpensesChart;