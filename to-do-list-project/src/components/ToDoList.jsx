import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props){
    

const editTask = (e)=>{
    console.log(e.target.dataset.taskid);
}
const deleteTask = (e)=>{
    console.log(e.target.dataset.taskid);
}

const displaySidePanel = (e)=>{
    console.log(e.target.dataset.itemid);
}

    return(
        <>
       {/* <ToDoItem addItemtoList = { addItemtoList }/>  */}
       <div className="listItemsTable">
        <div className="listHeader">
            <span>ID</span>
            <span>Title</span>
            <span>Description</span>
            <span>Assigned to</span>
            <span>Due date</span>
            <span>Status</span>
            <span></span>
            <span></span>
        </div>
            {props.listItems.map((listItem, index) =>{
                return (
                    <div className="ListItems" key={index}>
                        <span>{listItem.itemID}</span>
                        <span>{listItem.title}</span>
                        <span>{listItem.description}</span>
                        <span>{listItem.assignee}</span>
                        <span>{listItem.duedate}</span>
                        <span>{listItem.status}</span>
                        <span><button id="btnDelete" data-taskid={index} onClick={deleteTask}><i class="fa fa-trash-o"></i></button></span>
                        <span><button id="btnEdit" data-taskid={index} onClick={editTask}><i class="fa fa-edit"></i></button></span>
                    </div>
                )
            })}
       </div>
       </>
    )
}

export default ToDoList;