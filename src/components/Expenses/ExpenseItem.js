import React from 'react';

import './ExpenseItem.css'

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
     
    return (
        <div className="expense-item">

            <ExpenseDate date = {new Date(props.date)}/>

        <div className="expense-item-description">
            <h2>{props.title}</h2>
            <div className="expense-item-price">${props.amount}</div>
            <div className="btn">
                
            </div>
        </div>

        </div>
    );
}

export default ExpenseItem;









//     const [title,setTitle] = useState(props.title);
    
//     const [newTitle,setNewTitle] = useState("Hii");

//     const ClickHandler = () => {
//          setTitle(newTitle);
//     }

//     const ChangeHandler = (event) => {
//         setNewTitle(event.target.value);
//    }

 /* <input type="text" value={newTitle} onChange={ChangeHandler} />
                <button onClick={ClickHandler}>Change Title</button>*/
