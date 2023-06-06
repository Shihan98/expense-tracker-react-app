import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpene.css';

const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDatahandler = (enteredExpensedata) =>{
        const expenseData = {
            ...enteredExpensedata,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const starteditingHandler=()=>{
        setIsEditing(true);
    }

    const stopEditingHandler=()=>{
        setIsEditing(false);
    }


    return( 
    <div className='new-expense'>
        {!isEditing && <button onClick={starteditingHandler}>Add New Expense</button>}
        {isEditing &&<ExpenseForm onSaveExpenseData ={saveExpenseDatahandler} onCancel={stopEditingHandler}/>}
    </div>
    );
};

export default NewExpense;