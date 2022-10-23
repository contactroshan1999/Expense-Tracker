import React ,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = (props) =>
{

    // const [newTitle,setNewTitle]=useState('');


    // const [title,setTitle]=useState(props.title);

    // // let title=props.title;

    // const clickHandler = () =>{
    //     // title="Update Title";
    //     // console.log(title);
    //     setTitle(newTitle);
    // }

    // const changeHandler = (event) =>
    // {
    //     console.log(event);
    //     setNewTitle(event.target.value);
    // }
    return(
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date}/>
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            {/* <input type="text" value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Add Expense</button> */}
        </Card>
    );
}
export default ExpenseItem;