import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";

function ToDoPage(){
    const [displayToDoItem, setDisplayToDoItem] = useState(false);
    const [listItems, setlistItems] = useState([]);
    const [showAddNewItemButton, setshowAddNewItemButton] = useState(true);
    const addItemtoList = (title, description, status,assignee,duedate)=>{
        setDisplayToDoItem(false);
        setshowAddNewItemButton(!showAddNewItemButton);
        if(title!=""){
            let itemObj = {
                itemID:Math.floor(Math.random() * 1000),
                title: title,
                description: description,
                status: status,
                assignee:assignee,
                duedate:duedate
            }
            setlistItems([...listItems, itemObj]);
        }
    }

    const showToDoItem = (e)=>{
        setDisplayToDoItem(true);
        setshowAddNewItemButton(!showAddNewItemButton);
    }
    const toggleButton = ()=>{
    }
    return(
        <div className="todoPage">
            {showAddNewItemButton===true && <button className="btnAddnewtask"  onClick={showToDoItem}>Add New Task</button>}
            
            {displayToDoItem===true && <ToDoItem addItemtoList = { addItemtoList }/>}
            <ToDoList listItems = {listItems}/>
        </div>
    )
}
export default ToDoPage;