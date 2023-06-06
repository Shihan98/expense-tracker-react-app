import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle,setEnterdTitle] = useState('');
    const [enteredAmount,setEnterdAmount] = useState('');
    const [enteredDate,setEnterdDate] = useState('');
    // const  [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });


    const titleChangeHandler = (event) =>{
        setEnterdTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return{
        //         ...prevState,enteredTitle : event.target.value
        //     };
        // });
    };
    const amountChangeHandler = (event) =>{
        setEnterdAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })
    };

    const dateChangeHandler = (event) =>{
        setEnterdDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        //     })
    };

    const submitHandler = (event) =>{
        //javascrip code page eke load wenne na 
        //request ekak kohetawath yawne na 
        //load una page ekema tiynwa form ekn req yane na
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate),
        };
        
        props.onSaveExpenseData(expenseData);
        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');
    };


    return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Titel</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.1" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions '>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;