import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
//Parent component that hosts ToDoItem and ToDoList child components
function ToDoPage(){
    const [displayToDoItem, setDisplayToDoItem] = useState(false);
    //Array of tasks 
    const [listItems, setlistItems] = useState([]);
    //Flag to hold if the add new item button has to be shown
    const [showAddNewItemButton, setshowAddNewItemButton] = useState(true);
    //Function called from the child object to add a new item to the litsitems array
    const addItemtoList = (title, description, status,assignee,duedate)=>{
        setDisplayToDoItem(false);
        //Display the add button again when a new item is added
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
    //Remove deleted item from the listitems array
    const deleteItemFromList = (index)=> {
        listItems.splice(index, 1);
        setlistItems([...listItems]);
    }

    //Sort listitems array based on status
    const sortItems = (sortdirection)=>{
        if(sortdirection === 'asc'){
            listItems.sort((a,b)=>a.status.localeCompare(b.status));
        }
        if(sortdirection === 'desc'){
            listItems.sort((a,b)=>b.status.localeCompare(a.status));
        }
        setlistItems([...listItems]);
    }

    //Function that is called when the Add new item button is clicked
    const showToDoItem = (e)=>{
        //Displays the form to add a new item
        setDisplayToDoItem(true);
        //Hides add new item button
        setshowAddNewItemButton(!showAddNewItemButton);
    }
    
    return(
        <div className="todoPage">
            {/* Display add new item button if the showAddNewItemButton flag is true */}
            {showAddNewItemButton===true && <button className="btnAddnewtask"  onClick={showToDoItem}>Add New Task</button>}
            {/* Display the add new item component to add a new item if the flag displayToDoItem is true */}
            {displayToDoItem===true && <ToDoItem addItemtoList = { addItemtoList }/>}
            <ToDoList listItems = {listItems}
             ondeleteItemFromList={deleteItemFromList}
             onsortItems={sortItems}/>
        </div>
    )
}
export default ToDoPage;